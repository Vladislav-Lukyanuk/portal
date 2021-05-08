import { ICRUDRepository } from "@app/db/ICRUDRepository";
import { Token } from "@app/model/token";

export interface ITokenRepository extends ICRUDRepository<Token> {};
