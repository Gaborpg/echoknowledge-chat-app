import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { NgIf } from "@angular/common";
import { TranslatePipe, TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-authentication.page",
  standalone: true,
  imports: [RouterOutlet, TranslatePipe, RouterLink, RouterLinkActive],
  templateUrl: "./authentication.page.component.html",
  styleUrl: "./authentication.page.component.scss",
})
export class AuthenticationPageComponent {
  public translate: TranslateService = inject(TranslateService);
  public switchLanguage(lang: string) {
    this.translate.use(lang); // updates live language
    localStorage.setItem("lang", lang); // optionally store for reload
  }
}
