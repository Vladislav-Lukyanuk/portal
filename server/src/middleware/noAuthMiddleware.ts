import { Request, Response, NextFunction } from "express";

export const noAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  (async () => {
    const token = req.headers["authorization"];

    if (!token) {
      return next();
    }

    res.status(403).end("Forbidden");
  })();
};
