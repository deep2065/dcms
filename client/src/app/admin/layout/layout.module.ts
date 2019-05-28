import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SettingbarComponent } from './settingbar/settingbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopbarComponent,
    MenubarComponent,
    SettingbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TopbarComponent,
    MenubarComponent,
    SettingbarComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
