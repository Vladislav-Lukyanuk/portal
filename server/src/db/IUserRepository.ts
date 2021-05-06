import { ICRUDRepository } from "@app/db/ICRUDRepository";
import { User } from "@app/model/user";

export interface IUserRepository extends ICRUDRepository<User> {
  getByEmail(email: string): Promise<User>;
}
