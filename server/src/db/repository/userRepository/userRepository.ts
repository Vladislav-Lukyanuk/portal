import { injectable } from "inversify";

import { IUserRepository } from "@app/db/repository/userRepository/IUserRepository";
import { User } from "@app/model/user";
import { DbAdapter } from "@app/db/adapter/dbAdapter";

@injectable()
export class UserRepository implements IUserRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async add(obj: User): Promise<User> {
    const [user] = await this.dbAdapter.query<User>(
      "insert into users" +
        " (email, password_hash, role, has_ban)" +
        " values ($1, $2, $3, $4)" +
        " RETURNING id, email, password_hash, role, has_ban",
      [obj.email, obj.password_hash, obj.role, String(obj.has_ban)]
    );

    return user;
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

  async get(id: number): Promise<User> {
    const [user] = await this.dbAdapter.query<User | undefined>(
      "select * from users where id = $1",
      [id]
    );

    return user;
  }
}
