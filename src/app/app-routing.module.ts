/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./pages/home/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "about",
    loadComponent: () => import("./pages/about/about.component").then(({ AboutComponent }) => AboutComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
