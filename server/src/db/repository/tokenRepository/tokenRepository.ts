import { injectable } from "inversify";

import { ITokenRepository } from "@app/db/repository/tokenRepository/ITokenRepository";
import { Token } from "@app/model/token";
import { DbAdapter } from "@app/db/adapter/dbAdapter";

@injectable()
export class TokenRepository implements ITokenRepository {
  private readonly dbAdapter: DbAdapter;

  constructor() {
    this.dbAdapter = DbAdapter.getInstance();
  }

  async add(obj: Token): Promise<Token> {
    const [token] = await this.dbAdapter.query<Token>(
      "insert into tokens" +
        " (user_id, refresh_token, is_declined)" +
        " values ($1, $2, $3)" +
        " RETURNING id, user_id, refresh_token, is_declined",
      [obj.user_id, obj.refresh_token, String(obj.is_declined)]
    );

    return token;
  }

  getALl(): Promise<Token[]> {
    return Promise.resolve([]);
  }
}
