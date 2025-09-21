import { Routes } from "@angular/router";
import { AuthenticationPageComponent } from "./pages/authentication.page/authentication.page.component";
import { MainLayoutComponent } from "../../layout/main-layout/main-layout.component";

export const authenticationRoutes: Routes = [
  {
    path: "",
    component: AuthenticationPageComponent,
    children: [
      {
        path: "signup",
        loadComponent: () =>
          import("./components/sign-up/sign-up.component").then((m) => m.SignUpComponent),
      },
      {
        path: "login",
        loadComponent: () =>
          import("./components/login/login.component").then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "companies",
        loadComponent: () =>
          import("./components/company-list/company-list.component").then(
            (m) => m.CompanyListComponent
          ),
      },
      {
        path: "register-company",
        loadComponent: () =>
          import("./components/company-create/company-create.component").then(
            (m) => m.CompanyCreateComponent
          ),
      },
    ],
  },
];
