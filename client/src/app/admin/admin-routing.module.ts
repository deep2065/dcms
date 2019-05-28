import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path:"admin",redirectTo:"admin/login",pathMatch:"full"},
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'page',component:PageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
