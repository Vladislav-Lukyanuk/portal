import { Response, Express } from "express";
import { Controller } from "./controller";
import { WordRepository } from "../db/wordRepository";

export class HomeController extends Controller {
  private wordRepository;

  constructor(app: Express) {
    super("/", app);

    this.wordRepository = new WordRepository();

    this.registerEndpoint("get", "/", this.index.bind(this));
  }

  private index(_, res: Response): void {
    this.wordRepository.get("select * from words", []).then((words) => {
      res.send(words);
    });
  }
}
