import { Role } from "@app/model/role";

export class User {
  private _id: number;
  private _email: string;
  private _password_hash: string;
  private _role: Role;
  private _has_ban: boolean;

  constructor(
    email: string,
    passwordHash: string,
    role = Role.user,
    hasBan = false,
    id = 0
  ) {
    this._email = email;
    this._password_hash = passwordHash;
    this._role = role;
    this._has_ban = hasBan;
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

  get password_hash(): string {
    return this._password_hash;
  }

  set password_hash(value: string) {
    this._password_hash = value;
  }

  get role(): Role {
    return this._role;
  }

  set role(value: Role) {
    this._role = value;
  }

  get has_ban(): boolean {
    return this._has_ban;
  }

  set has_ban(value: boolean) {
    this._has_ban = value;
  }
}
