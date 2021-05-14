import { ICRUDRepository } from "@app/db/ICRUDRepository";
import { UserWordsPool } from "@app/model/userWordsPool";

export interface IUserWordPoolRepository
  extends ICRUDRepository<UserWordsPool> {
  getAllByUserId(userId: number): Promise<UserWordsPool[]>;
}
