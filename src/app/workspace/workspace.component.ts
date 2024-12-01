import { Component, OnDestroy, OnInit } from '@angular/core';
import { Doc } from '../core/model/doc.model';
import { Tab } from '../core/model/tab.model';
import { Subscription } from 'rxjs';
import { TabService } from '../core/services/tab.service';
import { AllDocsComponent } from "../all-docs/all-docs.component";
import { EditDocComponent } from "../edit-doc/edit-doc.component";
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workspace',
  imports: [AllDocsComponent, EditDocComponent, MatTabsModule, CommonModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent implements OnInit, OnDestroy {
  tabs: Array<Tab> = [];
  subscriptionCreateNewDoc: Subscription;
  subscriptionViewAllDocs: Subscription;
  lastTabId: number = 1;

  constructor(private tabService: TabService) {
    this.subscriptionCreateNewDoc = tabService
      .createNewDoc$
      .subscribe(() => this.addTabCreateNewDoc());

    this.subscriptionViewAllDocs = tabService
      .viewAllCustomers$
      .subscribe(() => this.addTabViewAllDocs());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionCreateNewDoc.unsubscribe();
    this.subscriptionViewAllDocs.unsubscribe();
  }

  private addTabCreateNewDoc() {
    var newDoc = new Doc(0, "");
    let tab = Tab.createEditDoc(newDoc);
    this.tabs.push(tab);
  }

  private addTabViewAllDocs() {
    let already = this.tabs.some(t => t.getId() == -1);
    if (!already) {
      let tab = Tab.createAllDocs();
      this.tabs.push(tab);
    }
  }

  onCloseTab(tab: Tab): void {
    this.tabs = this.tabs.filter(t => t.getId() != tab.getId());
  }
}
