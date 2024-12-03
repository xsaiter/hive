import { Component, OnInit } from '@angular/core';
import { MatCell, MatHeaderCell, MatRow, MatTable, MatTableDataSource } from '@angular/material/table';
import { Doc } from '../core/model/doc.model';
import { DocService } from '../core/services/doc.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-all-docs',
  imports: [MatTable, MatHeaderCell, MatCell, MatRow, MatTableModule],
  templateUrl: './all-docs.component.html',
  styleUrl: './all-docs.component.css'
})
export class AllDocsComponent implements OnInit {

  constructor(private docService: DocService) { }

  dataSource = new MatTableDataSource<Doc>();

  ngOnInit(): void {
    this.docService.getAllDocs()
      .then(data => this.dataSource.data = data);
  }

  displayedColumns: string[] = ['id', 'name', 'email'];
}
