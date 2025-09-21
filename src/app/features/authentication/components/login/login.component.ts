import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
// import { AuthService } from '../../core/auth.service';
import { catchError, of, switchMap, take } from "rxjs";
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslatePipe],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  email = "";
  password = "";
  error = "";

  constructor(private router: Router) {}

  // constructor(private auth: AuthService, private router: Router) {}
  //
  // loginEmail(event: Event) {
  //   event.preventDefault();
  //
  //   this.auth.loginWithEmail(this.email, this.password).pipe(
  //     switchMap(() => this.auth.getUserWithCompanies()),
  //     take(1),
  //     catchError(err => {
  //       this.error = err.message;
  //       return of(null);
  //     })
  //   ).subscribe(user => {
  //     this.redirectBasedOnCompanies(user);
  //   });
  // }
  //
  // loginGoogle() {
  //   this.auth.loginWithGoogle().pipe(
  //     switchMap(() => this.auth.getUserWithCompanies()),
  //     take(1),
  //     catchError(err => {
  //       this.error = err.message;
  //       return of(null);
  //     })
  //   ).subscribe(user => {
  //     this.redirectBasedOnCompanies(user);
  //   });
  // }
  //
  // private redirectBasedOnCompanies(user: any) {
  //   if (!user || !user.companies) {
  //     this.router.navigate(['/register-company']);
  //     return;
  //   }
  //
  //   const companies = user.companies;
  //   if (companies.length === 0) {
  //     this.router.navigate(['/register-company']);
  //   } else if (companies.length === 1) {
  //     this.auth.setSelectedCompany(companies[0]); // store in localStorage or memory
  //     this.router.navigate(['/companies']);
  //   } else {
  //     this.router.navigate(['/choose-company']);
  //   }
  // }
  public login() {
    this.router.navigate(["auth/companies"]);
  }
}
