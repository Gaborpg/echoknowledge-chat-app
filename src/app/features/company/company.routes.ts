import { Routes } from "@angular/router";
import { MainLayoutComponent } from "../../layout/main-layout/main-layout.component";
import { BotListComponent } from "./components/bot-list/bot-list.component";
import {BotCreateComponent} from "./components/bot-create/bot-create.component";
import {BotCompareComponent} from "./components/bot-compare/bot-compare.component";
export const companyRoutes: Routes = [
  {
    path: "bots",
    component: MainLayoutComponent,
    children: [
      { path: "", component: BotListComponent },
      { path: "create", component: BotCreateComponent },
      { path: "compare", component: BotCompareComponent }
    ],
  },
];
