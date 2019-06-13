import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './menu/menu.component';
import { AmenuModule } from './amenu/amenu.module';
import { UsersModule } from './users/users.module';
import { ModuleModule } from './module/module.module';
import { MediaModule } from './media/media.module';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { PageModule } from './page/page.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent,
    MenuComponent,
    PagetitleComponent
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
    MediaModule,
    PageModule
  ]
})
export class AdminModule { }
