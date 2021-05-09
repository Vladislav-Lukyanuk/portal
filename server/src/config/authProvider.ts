import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { interfaces } from "inversify-express-utils";

import { Principal } from "@app/config/principal";
import { container } from "@app/ioc/ioc.config";
import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";
import { DECLARATIONS } from "@app/ioc/declarations";
import { IAuthService } from "@app/service/auth/IAuthService";
import { User } from "@app/model/user";

@injectable()
export class AuthProvider implements interfaces.AuthProvider {
  @inject(DECLARATIONS.AuthService) private readonly _authService: IAuthService;
  @inject(DECLARATIONS.UserRepository)
  private readonly _userService: IUserRepository;

  public async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<interfaces.Principal> {
    const token: string | undefined = req.headers["authorization"];

    const userObj = await this._authService.verifyToken(token || "");

    if (!userObj) {
      return new Principal(new User("", ""));
    }

    const user = await this._userService.get(userObj.id);

    return new Principal(user);
  }
}
