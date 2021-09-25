import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {extensionsRoutes} from "./extensions/extensions-routing.module";

const routes: Routes = extensionsRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
