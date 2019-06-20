import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from './layout/layout.module';
import { AdminComponent } from './admin.component';
import { AmenuModule } from './amenu/amenu.module';
import { UsersModule } from './users/users.module';
import { ModuleModule } from './module/module.module';
import { MediaModule } from './media/media.module';
import { PageModule } from './page/page.module';
import { ThemesModule } from './themes/themes.module';
import { PostModule } from './post/post.module';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    AdminComponent,
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
    PageModule,
    ThemesModule,
    PostModule,
    GalleryModule
  ]
})
export class AdminModule { }
