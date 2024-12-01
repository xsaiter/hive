export class Doc {

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;

  isValid(): boolean {
    return this.name != null;
  }

  isExisting(): boolean {
    return this.id > 0;
  }
}
