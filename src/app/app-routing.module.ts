import {NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LandingLayoutComponent} from "./layouts/landing-layout/landing-layout.component";
import {DashboardLayoutComponent} from "./layouts/dashboard-layout/dashboard-layout.component";

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'landing'},
  {path: '', component: LandingLayoutComponent,
    children: [
        { path:'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) }
      ]
  },
  {path: '', component: DashboardLayoutComponent,
    children: [
      {path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m =>m.DashboardModule) }
    ]
  },
  {path:'**' , component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
