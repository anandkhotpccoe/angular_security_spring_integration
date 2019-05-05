import { Routes } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { IndexComponent } from "./components/index/index.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { AuthGuard } from "./services/auth/auth-guard.service";

//it include two property
//path: a string that matches the URL in the browser address bar.
//component: the component that the router should create when navigating to this route.
export const appRoutes: Routes = [
  {
    path: "create",
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "dashboard",
    component: IndexComponent,
    canActivate: [AuthGuard]
  },
  { path: "signup", component: SignupComponent },
  { path: "signin", component: SigninComponent },
  { path: "**", redirectTo: "signin" }
];
