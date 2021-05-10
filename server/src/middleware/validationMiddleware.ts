import { flatten } from "lodash/fp";
import { RequestHandler } from "express";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { sanitize } from "class-sanitizer";

import { ApiException } from "@app/exception/ApiException";

export const validationMiddleware = (
  type: any,
  skipMissingProperties = false
): RequestHandler => {
  return (req, res, next) => {
    // obj to class instance
    const dtoObj = plainToClass(type, req.body);

    (async () => {
      const errors = await validate(dtoObj, { skipMissingProperties });

      if (errors.length > 0) {
        const [firstError] = flatten(
          errors.map((error: ValidationError) =>
            Object.values(error.constraints)
          )
        );

        return next(new ApiException(firstError));
      }

      sanitize(dtoObj);
      req.body = dtoObj;
      next();
    })();
  };
};
