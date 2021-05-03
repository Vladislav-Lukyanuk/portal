import { Word } from "@app/model/word";

import { ICRUDRepository } from "./ICRUDRepository";

export interface IWordRepository extends ICRUDRepository<Word> {};
