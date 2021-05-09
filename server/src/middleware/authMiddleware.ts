import { Request, Response, NextFunction } from "express";

import { container } from "@app/ioc/ioc.config";
import { DECLARATIONS } from "@app/ioc/declarations";
import { IAuthService } from "@app/service/auth/IAuthService";
import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";
import { Role } from "@app/model/role";

export const authMiddleware = (config?: { role: Role }) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authRepository = container.get<IAuthService>(DECLARATIONS.AuthService);
  const userRepository = container.get<IUserRepository>(
    DECLARATIONS.UserRepository
  );

  const declineRequest = () => {
    res.status(403).end("Forbidden");
  };

  (async () => {
    const token = req.headers["authorization"];
    const userObj = await authRepository.verifyToken(token);

    if (!userObj) {
      return declineRequest();
    }

    const user = await userRepository.get(userObj.id);

    if (user.has_ban) {
      return declineRequest();
    }

    if (config && config.role && user.role !== config.role) {
      return declineRequest();
    }

    next();
  })();
};
