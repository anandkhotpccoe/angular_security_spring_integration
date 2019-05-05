import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];
//Add an @NgModule.exports array with RouterModule in it.
// Exporting RouterModule makes router directives available
// for use in the AppModule components that will need them.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
