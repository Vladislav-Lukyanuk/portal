import { Response, Express } from "express";

import { container } from "@app/ioc/ioc.config";
import { DECLARATIONS } from "@app/ioc/declarations";
import { IWordRepository } from "@app/db/IWordRepository";

import { Controller } from "./controller";

export class HomeController extends Controller {
  private wordRepository: IWordRepository;

  constructor(app: Express) {
    super("/", app);

    this.wordRepository = container.get(DECLARATIONS.WordRepository);

    this.registerEndpoint("get", "/", this.index.bind(this));
  }

  private async index(_, res: Response): Promise<void> {
    const response = await this.wordRepository.getALl();

    res.send(response);
  }
}
