export class PoolWords {
  private _id: number;
  private _user_pool_id: number;
  private _word_id: number;
  private _accept_number: number;

  constructor(
    id: number,
    user_pool_id: number,
    word_id: number,
    accept_number: number
  ) {
    this._id = id;
    this._user_pool_id = user_pool_id;
    this._word_id = word_id;
    this._accept_number = accept_number;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_pool_id(): number {
    return this._user_pool_id;
  }

  set user_pool_id(value: number) {
    this._user_pool_id = value;
  }

  get word_id(): number {
    return this._word_id;
  }

  set word_id(value: number) {
    this._word_id = value;
  }

  get accept_number(): number {
    return this._accept_number;
  }

  set accept_number(value: number) {
    this._accept_number = value;
  }
}
