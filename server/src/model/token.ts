export class Token {
  private _id: number;
  private _user_id: number;
  private _refresh_token: string;
  private _is_declined: boolean;

  constructor(
    userId: number,
    refreshToken: string,
    id = 0,
    isDeclined = false
  ) {
    this._id = id;
    this._user_id = userId;
    this._refresh_token = refreshToken;
    this._is_declined = isDeclined;
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

  get refresh_token(): string {
    return this._refresh_token;
  }

  set refresh_token(value: string) {
    this._refresh_token = value;
  }

  get is_declined(): boolean {
    return this._is_declined;
  }

  set is_declined(value: boolean) {
    this._is_declined = value;
  }
}
