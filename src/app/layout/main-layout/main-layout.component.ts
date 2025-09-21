import { Component } from "@angular/core";
import { MatSidenavContainer, MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
import {CommonModule, NgClass, NgIf, NgStyle} from "@angular/common";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: "app-main-layout",
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    RouterOutlet,
    NgStyle,
    MatIcon,
    MatButton,
    NgClass,
    MatTooltip,
    CommonModule
  ],
  templateUrl: "./main-layout.component.html",
  styleUrl: "./main-layout.component.scss"
})
export class MainLayoutComponent {
  public isExpanded = true;

  public toggleSidenav() {
    this.isExpanded = !this.isExpanded;
  }
}
