import { IUserRepository } from "@app/db/IUserRepository";
import { User } from "@app/model/user";
import { DbAdapter } from "@app/db/adapter/dbAdapter";

export class UserRepository implements IUserRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async add(obj: User): Promise<User> {
    const [user] = await this.dbAdapter.query<User>(
      "insert into users (email, passwordHash) values ($1, $2)",
      [obj.email, obj.passwordHash]
    );

    return user;
  }

  getALl(): Promise<User[]> {
    return this.dbAdapter.query("select * from users", []);
  }

  async getByEmail(email: string): Promise<User> {
    const [user] = await this.dbAdapter.query<User>(
      "select * from users where email = $1",
      [email]
    );

    if (user === undefined) {
      throw new Error("User isn't exist");
    }

    return user;
  }
}
