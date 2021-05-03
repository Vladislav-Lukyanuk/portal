import { Response, Express } from "express";

import { WordRepository } from "db/wordRepository";

import { Controller } from "./controller";

export class HomeController extends Controller {
  private wordRepository: WordRepository;

  constructor(app: Express) {
    super("/", app);

    this.wordRepository = new WordRepository();

    this.registerEndpoint("get", "/", this.index.bind(this));
  }

  private async index(_, res: Response): Promise<void> {
    const response = await this.wordRepository.getALl();

    res.send(response);
  }
}
