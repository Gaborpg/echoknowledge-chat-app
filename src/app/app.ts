import {Component, OnInit, signal} from "@angular/core";
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: "app-root",
  imports: [RouterOutlet, TranslateModule],
  standalone: true,
  templateUrl: "./app.html",
  styleUrl: "./app.scss"
})
export class App implements OnInit {
  title = "echoknowledge";

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const isBrowser = typeof window !== "undefined";
    const savedLang = isBrowser ? localStorage.getItem("lang") : null;

    const lang = this.route.snapshot.queryParamMap.get("lang") || savedLang || "en";

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
