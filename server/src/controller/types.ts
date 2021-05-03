import { Request, Response } from "express";

export interface IController {
  registerEndpoint: (
    method: "get" | "post" | "put" | "delete",
    path: string,
    callback: <T>(req: Request, res: Response) => T | void
  ) => void;
}
