import { Component } from '@angular/core';
import { TabService } from '../core/services/tab.service';

@Component({
  selector: 'app-control-panel',
  imports: [],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {

  constructor(private tabService: TabService) { }

  onCreateNewDoc(): void {
    this.tabService.createNewDoc();
  }

  onViewAllDocs(): void {
    this.tabService.viewAllDocs();
  }
}
