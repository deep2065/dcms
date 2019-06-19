import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemelistComponent } from './themelist/themelist.component';
import { ThemecreateComponent } from './themecreate/themecreate.component';

@NgModule({
  declarations: [ThemelistComponent, ThemecreateComponent],
  imports: [
    CommonModule
  ]
})
export class ThemesModule { }
