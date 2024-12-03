import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DocService } from '../core/services/doc.service';
import { EditDocTab, Tab } from '../core/model/tab.model';
import { Doc } from '../core/model/doc.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-doc',
  imports: [FormsModule],
  templateUrl: './edit-doc.component.html',
  styleUrl: './edit-doc.component.css'
})
export class EditDocComponent implements OnInit {
  @Input() tab: Tab | undefined;
  @Output() saveEvent: EventEmitter<Doc> = new EventEmitter<Doc>();

  constructor(private docService: DocService) { }

  ngOnInit(): void { }

  doc(): Doc {
    return (<EditDocTab>this.tab).getDoc();
  }

  onSave(): void {
    this.docService.saveDoc(this.doc());
    this.saveEvent.emit(this.doc());
  }

  valid(): boolean {
    return this.doc().isValid();
  }
}
