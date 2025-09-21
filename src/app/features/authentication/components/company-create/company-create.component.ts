import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgClass, NgIf } from "@angular/common";
import { TranslatePipe } from "@ngx-translate/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-create",
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: "./company-create.component.html",
  styleUrl: "./company-create.component.scss",
})
export class CompanyCreateComponent {
  companyName = "";
  companySlug = "";
  logoDataUrl: string | null = null;
  selectedLang = "en-US";

  constructor(private router: Router) {}

  generateSlug() {
    this.companySlug = this.companyName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  handleLogoUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.size <= 1048576) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.logoDataUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    console.log("Creating company with data:", {
      name: this.companyName,
      slug: this.companySlug,
      logo: this.logoDataUrl,
    });
    this.router.navigate(["kjdskd-6765-jasksa", "bots"]);
  }
}
