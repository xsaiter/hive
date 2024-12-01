import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  private createNewDocSource = new Subject<void>();
  private viewAllDocsSource = new Subject<void>();

  constructor() { }

  createNewDoc$ = this.createNewDocSource.asObservable();
  viewAllCustomers$ = this.viewAllDocsSource.asObservable();

  createNewDoc(): void {
    this.createNewDocSource.next();
  }

  viewAllDocs(): void {
    this.viewAllDocsSource.next();
  }
}
