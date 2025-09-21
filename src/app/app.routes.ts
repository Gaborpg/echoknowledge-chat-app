import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./features/authentication/authentication.routes").then((m) => m.authenticationRoutes),
  },
  {
    path: ":companyId",
    loadChildren: () => import("./features/company/company.routes").then((m) => m.companyRoutes),
  },
  { path: "", redirectTo: "/auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "/auth/login" }
];
