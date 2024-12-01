import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllDocsComponent } from './all-docs/all-docs.component';
import { ControlPanelComponent } from "./control-panel/control-panel.component";
import { WorkspaceComponent } from "./workspace/workspace.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllDocsComponent, ControlPanelComponent, WorkspaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hive';
}
