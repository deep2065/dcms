import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page.component';

const routes: Routes = [
    {path:"admin/page",redirectTo:"admin/page/list",pathMatch:"full"},
  {
    path:'admin/page',
    component:PageComponent,
    children:[
      {path:'create',component:CreateComponent},
      {path:'list',component:ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
