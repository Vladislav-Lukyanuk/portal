import { interfaces } from "inversify-express-utils";
import { User } from "@app/model/user";

export class Principal implements interfaces.Principal {
  public details: User;

  public constructor(user: User) {
    this.details = user;

    delete this.details.password_hash;
  }

  public isAuthenticated(): Promise<boolean> {
    return Promise.resolve(this.details.password_hash !== "");
  }

  public isResourceOwner(resourceId: string): Promise<boolean> {
    return Promise.resolve(false);
  }

  public isInRole(role: string): Promise<boolean> {
    return Promise.resolve(role === this.details.role.toString());
  }
}
