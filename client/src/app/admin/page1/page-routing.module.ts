import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
{path:"page",redirectTo:"page/list",pathMatch:"full"},
  {
    path:'page',
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
