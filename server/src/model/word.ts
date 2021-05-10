export class Word {
  private _id: number;
  private _category_id: number;
  private _word: string;
  private _transcription: string;
  private _image_src: string;

  constructor(
    id: number,
    category_id: number,
    word: string,
    transcription: string,
    image_src: string
  ) {
    this._id = id;
    this._category_id = category_id;
    this._word = word;
    this._transcription = transcription;
    this._image_src = image_src;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category_id(): number {
    return this._category_id;
  }

  set category_id(value: number) {
    this._category_id = value;
  }

  get word(): string {
    return this._word;
  }

  set word(value: string) {
    this._word = value;
  }

  get transcription(): string {
    return this._transcription;
  }

  set transcription(value: string) {
    this._transcription = value;
  }

  get image_src(): string {
    return this._image_src;
  }

  set image_src(value: string) {
    this._image_src = value;
  }
}
