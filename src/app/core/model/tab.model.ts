import { Doc } from './doc.model';

export enum TabTypes {
  editDoc,
  allDocs
}

export abstract class Tab {
  abstract getType(): TabTypes;

  getTitle(): string {
    return "";
  }

  isEditDoc(): boolean {
    return this.getType() === TabTypes.editDoc;
  }

  isAllDocs(): boolean {
    return this.getType() === TabTypes.allDocs;
  }

  abstract getId(): number;

  static createEditDoc(doc: Doc) {
    return new EditDocTab(doc);
  }

  static createAllDocs() {
    return new AllDocsTab();
  }
}

export class EditDocTab extends Tab {
  private doc: Doc;

  constructor(doc: Doc) {
    super();
    this.doc = doc;
  }

  getType(): TabTypes {
    return TabTypes.editDoc;
  }

  getId(): number {
    return this.doc.id;
  }

  override getTitle(): string {
    if (this.getId() == 0) {
      return `Create New Doc`;
    } else {
      return `Edit Doc ${this.getId()}`;
    }
  }

  getDoc(): Doc {
    return this.doc;
  }
}

export class AllDocsTab extends Tab {
  getType(): TabTypes {
    return TabTypes.allDocs;
  }

  getId(): number {
    return -1;
  }

  override getTitle(): string {
    return `all docs`;
  }
}
