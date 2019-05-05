import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth/auth.service";
import { Router } from "@angular/router";
import { MustMatch } from "./../../common/mustMatch";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;
  messageObj: object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        username: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required]
      },
      {
        validator: MustMatch("password", "confirmPassword")
      }
    );
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.signupForm.controls;
  }

  onSignup() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    const { confirmPassword, ...restForm } = this.signupForm.value;

    this.authService.signupUser(restForm).subscribe(
      res => {
        if (res.success) {
          alert(res.message);
          this.submitted = false;
          this.signupForm.reset();
          // this.router.navigate(["/dashboard"]);
        }
      },
      err => {
        this.messageObj = err.error;
      }
    );
  }
}
