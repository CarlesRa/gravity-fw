import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {extensionsRoutes} from "./extensions/extensions-routing.module";

const routes = [];
routes.push(
  {
    path: 'login', loadChildren: () =>
      import('./gravity-fw-core/components/login/login.module').then(m => m.LoginModule),
  },
);
extensionsRoutes.forEach(route => routes.push(route));
routes.push(
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  }, // Todo: add page not found component to no match routes.
  {
    path: '**', redirectTo: 'login'
  },
)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
