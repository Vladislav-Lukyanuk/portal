import { inject } from "inversify";
import {
  BaseHttpController,
  controller,
  httpGet,
  httpPost,
  queryParam,
} from "inversify-express-utils";

import { DECLARATIONS } from "@app/ioc/declarations";
import { authMiddleware } from "@app/middleware/authMiddleware";
import { IWordService } from "@app/service/word/IWordService";
import { WordPoolDto } from "@app/dto/wordPoolDto";
import { objMap } from "@app/utilities/objMap";

@controller("/word", authMiddleware())
export class WordController extends BaseHttpController {
  @inject(DECLARATIONS.WordService)
  private readonly _wordService: IWordService;

  @httpPost("/pool")
  public async createUserPool(
    @queryParam("name") poolName: string
  ): Promise<WordPoolDto> {
    const userId = this.httpContext.user.details.id as number;

    return objMap(
      await this._wordService.createUserPool(userId, poolName),
      (model) => ({
        id: model.id,
        userId: model.user_id,
        name: model.name,
        learnedNumber: model.learned_number,
        totalNumber: model.total_number,
      })
    );
  }

  @httpGet("/pool")
  public async getUserWordsPool(): Promise<WordPoolDto[]> {
    const userId = this.httpContext.user.details.id as number;

    return (await this._wordService.getUserPools(userId)).map((model) => ({
      id: model.id,
      userId: model.user_id,
      name: model.name,
      learnedNumber: model.learned_number,
      totalNumber: model.total_number,
    }));
  }
}
