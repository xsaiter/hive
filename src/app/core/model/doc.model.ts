import { isNullOrEmpty } from "./strUtils";

export class Doc {

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  id: number;
  name: string;
  email: string

  isValid(): boolean {
    return this.validName() && this.validEmail();
  }

  isExisting(): boolean {
    return this.id > 0;
  }

  private validName(): boolean {
    return !isNullOrEmpty(this.name);
  }

  private validEmail(): boolean {
    return !isNullOrEmpty(this.email);
  }
}


