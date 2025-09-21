import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslateModule, TranslatePipe, TranslateService } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";

export interface Company {
  initials: string;
  name: string;
  created: string;
  tier: "Free" | "Pro" | "Enterprise"; // optional enum typing
  tierColor: "primary" | "yellow" | "gray"; // optional controlled values
}

@Component({
  selector: "app-company-list",
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: "./company-list.component.html",
  styleUrl: "./company-list.component.scss",
})
export class CompanyListComponent {
  companies: Company[] = [
    {
      initials: 'AC',
      name: 'Acme Corporation',
      created: 'Jan 15, 2023',
      tier: 'Enterprise',
      tierColor: 'primary'
    },
    {
      initials: 'TD',
      name: 'Tech Dynamics',
      created: 'Mar 22, 2023',
      tier: 'Pro',
      tierColor: 'yellow'
    },
    {
      initials: 'IS',
      name: 'Innovate Solutions',
      created: 'May 5, 2023',
      tier: 'Free',
      tierColor: 'gray'
    }
  ];
  constructor(private translate: TranslateService) {
    console.log("Current lang:", this.translate.currentLang);
  }
  showDropdown = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  closeDropdown() {
    this.showDropdown = false;
  }
}
