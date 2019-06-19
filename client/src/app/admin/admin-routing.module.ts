import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { MedialistComponent } from './media/medialist/medialist.component';
import { PagelistComponent } from './page/pagelist/pagelist.component';
import { PagecreateComponent } from './page/pagecreate/pagecreate.component';
import { ThemelistComponent } from './themes/themelist/themelist.component';

const routes: Routes = [
  {path:"admin",redirectTo:"admin/login",pathMatch:"full"},
  {path:'admin/login',component:LoginComponent},
  {
    path:'admin',
    canActivate:[AdminGuard],
    component:AdminComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'page',component:PagelistComponent},
      {path:'page/create',component:PagecreateComponent},
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
      {path:'module/moduleedit/:id',component:ModulecreateComponent},
      {path:'media',component:MedialistComponent},
      {path:'theme',component:ThemelistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
