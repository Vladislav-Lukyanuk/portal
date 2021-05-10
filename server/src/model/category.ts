export class Category {
  private _id: number;
  private _name: string;
  private _icon_src: string;

  constructor(id: number, name: string, icon_src: string) {
    this._id = id;
    this._name = name;
    this._icon_src = icon_src;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get icon_src(): string {
    return this._icon_src;
  }

  set icon_src(value: string) {
    this._icon_src = value;
  }
}
