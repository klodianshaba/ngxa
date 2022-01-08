import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {DashboardLayoutComponent} from "./layouts/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {path: '', component: DashboardLayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m =>m.DashboardModule) }
    ]
  },
  {path:'**' , pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
