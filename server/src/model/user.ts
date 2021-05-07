import { Role } from "@app/model/role";

export class User {
  private _id: number;
  private _email: string;
  private _passwordHash: string;
  private _role: Role;
  private _hasBan: boolean;

  constructor(
    email: string,
    passwordHash: string,
    role = Role.user,
    hasBan = false,
    id = 0
  ) {
    this._email = email;
    this._passwordHash = passwordHash;
    this._role = role;
    this._hasBan = hasBan;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get passwordHash(): string {
    return this._passwordHash;
  }

  set passwordHash(value: string) {
    this._passwordHash = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }

  get hasBan(): boolean {
    return this._hasBan;
  }

  set hasBan(value: boolean) {
    this._hasBan = value;
  }
}
