import { injectable } from "inversify";

import { IUserRepository } from "@app/db/IUserRepository";
import { User } from "@app/model/user";
import { DbAdapter } from "@app/db/adapter/dbAdapter";

@injectable()
export class UserRepository implements IUserRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async add(obj: User): Promise<void> {
    await this.dbAdapter.query<User>(
      "insert into users (email, password_hash, role, has_ban) values ($1, $2, $3, $4)",
      [obj.email, obj.passwordHash, obj.role, String(obj.hasBan)]
    );
  }

  getALl(): Promise<User[]> {
    return this.dbAdapter.query("select * from users", []);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    const [user] = await this.dbAdapter.query<User | undefined>(
      "select * from users where email = $1",
      [email]
    );

    return user;
  }
}
