import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpPost,
  queryParam,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { authMiddleware } from "@app/middleware/authMiddleware";
import { IWordService } from "@app/service/word/IWordService";

@controller("/word", authMiddleware())
export class WordController extends BaseHttpController {
  @inject(DECLARATIONS.WordService)
  private readonly _wordService: IWordService;

  @httpPost("/pool")
  public async createUserPool(
    @queryParam("name") poolName: string
  ): Promise<any> {
    const userId = this.httpContext.user.details.id as number;

    return await this._wordService.createUserPool(userId, poolName);
  }
}
