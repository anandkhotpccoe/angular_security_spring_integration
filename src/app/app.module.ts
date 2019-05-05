import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./components/index/index.component";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routeConfig";
import { HttpClientModule } from "@angular/common/http";
import { CategoryService } from "./services/category/category.service";
import { SigninComponent } from "./components/auth/signin/signin.component";
import { SignupComponent } from "./components/auth/signup/signup.component";
import { AuthService } from "./services/auth/auth.service";
import { HeaderComponent } from "./components/header/header.component";
import { FilterPipe } from "./components/pipes/filter.pipes";
import { AuthGuard } from "./services/auth/auth-guard.service";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    SigninComponent,
    SignupComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    //Add RouterModule to the @NgModule.imports array and configure
    // it with the routes in one step by calling RouterModule.forRoot() within the imports array
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CategoryService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
