export class UserWordsPool {
  private _id: number;
  private _user_id: number;
  private _name: string;
  private _learned_number: number;
  private _total_number: number;

  constructor(
    id: number,
    user_id: number,
    name: string,
    learned_number: number,
    total_number: number
  ) {
    this._id = id;
    this._user_id = user_id;
    this._name = name;
    this._learned_number = learned_number;
    this._total_number = total_number;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user_id(): number {
    return this._user_id;
  }

  set user_id(value: number) {
    this._user_id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get learned_number(): number {
    return this._learned_number;
  }

  set learned_number(value: number) {
    this._learned_number = value;
  }

  get total_number(): number {
    return this._total_number;
  }

  set total_number(value: number) {
    this._total_number = value;
  }
}
