import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin.component';
import { ListComponent } from './amenu/list/list.component';
import { CreateComponent } from './amenu/create/create.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { ModulelistComponent } from './module/modulelist/modulelist.component';
import { ModulecreateComponent } from './module/modulecreate/modulecreate.component';
import { RoleComponent } from './users/role/role.component';
import { RolecreateComponent } from './users/rolecreate/rolecreate.component';
import { UsercreateComponent } from './users/usercreate/usercreate.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:"admin",redirectTo:"admin/login",pathMatch:"full"},
  {path:'admin/login',component:LoginComponent},
  {
    path:'admin',
    canActivate:[AdminGuard],
    component:AdminComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'page',component:PageComponent},
      {path:'menu',component:ListComponent},
      {path:'menu/create',component:CreateComponent},
      {path:'menu/submenu/:id/:menutype',component:CreateComponent},
      {path:'users', component:UserlistComponent},
      {path:'users/create', component:UsercreateComponent},
      {path:'users/edit/:id', component:UsercreateComponent},
      {path:'user/role', component:RoleComponent},
      {path:'user/role/create', component:RolecreateComponent},
      {path:'user/role/edit/:id', component:RolecreateComponent},
      {path:'module', component:ModulelistComponent},
      {path:'module/modulecreate',component:ModulecreateComponent},
      {path:'module/moduleedit/:id',component:ModulecreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
