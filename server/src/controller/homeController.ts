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
    this.wordRepository.query("select * from words", []).then(({ rows }) => {
      res.send(rows);
    });
  }
}
