import { Injectable } from '@angular/core';
import { Doc } from '../model/doc.model';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocService {
  private readonly docs: Array<Doc> = [];
  private lastId: number;

  constructor() {
    this.lastId = 0;
  }

  saveDoc(doc: Doc): number {
    if (doc.isExisting()) {
      let existing = this.docs.find(_ => _.id == doc.id);
      if (existing == null) {
        throw new Error(`No doc with id {doc.id}`);
      }
      existing.id = doc.id;
      existing.name = doc.name;
      existing.email = doc.email;
    } else {
      this.lastId++;
      doc.id = this.lastId;
      this.docs.push(doc);
    }
    return doc.id;
  }

  getAllDocs(): Promise<Doc[]> {
    return Promise.resolve(this.docs);
  }
}
