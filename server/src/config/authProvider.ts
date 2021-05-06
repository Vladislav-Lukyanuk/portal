import { Request, Response, NextFunction } from "express";
import { injectable } from "inversify";
import { interfaces } from "inversify-express-utils";

import { Principal } from "@app/config/principal";

@injectable()
class AuthProvider implements interfaces.AuthProvider {
  // @authService private readonly _authService: AuthService;

  public async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<interfaces.Principal> {
    const token = req.headers["x-auth-token"];
    // TODO: request user from db;
    const user = null;

    const principal = new Principal(user);

    return principal;
  }
}
