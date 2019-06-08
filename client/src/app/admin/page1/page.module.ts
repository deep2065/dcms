import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    PageComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }
