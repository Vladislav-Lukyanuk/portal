import { NextFunction, Request, Response } from "express";

import { ApiException } from "@app/exception/ApiException";

export const exceptionHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof ApiException) {
    res.status(400).send({
      message: err.message,
    });

    return;
  }
  // TODO: add a logger here
  res.status(500).send("Server can't execute your request. We are sorry.");
};
