import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';
import { PageComponent } from './page/page.component';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { AmenuModule } from './amenu/amenu.module';
import { UsersModule } from './users/users.module';
import { ModuleModule } from './module/module.module';
import { MediaModule } from './media/media.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    PageComponent,
    AdminComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    AmenuModule,
    UsersModule,
    ModuleModule,
    MediaModule
  ]
})
export class AdminModule { }
