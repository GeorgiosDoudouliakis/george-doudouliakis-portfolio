/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    title: "George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/home/home.component").then(({ HomeComponent }) => HomeComponent)
  },
  {
    path: "about",
    title: "About | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/about/layout/about.component").then(({ AboutComponent }) => AboutComponent)
  },
  {
    path: "experience",
    title: "Experience | George Doudouliakis - Front End Web Developer",
    loadComponent: () => import("./pages/experience/layout/experience.component").then(({ ExperienceComponent }) => ExperienceComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
