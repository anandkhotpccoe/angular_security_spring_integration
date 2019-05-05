import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}
  signinForm: FormGroup;
  submitted = false;
  messageObj: object;

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      usernameOrEmail: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signinForm.controls;
  }

  onSignin() {
    this.submitted = true;
    if (this.signinForm.invalid) {
      return;
    }
    this.authService.signinUser(this.signinForm.value).subscribe(
      res => {
        if (res.accessToken) {
          localStorage.setItem("accessToken", res.accessToken);
          this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        this.messageObj = err.error;
      }
    );
  }
}
