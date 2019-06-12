import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileManagerModule} from 'ng6-file-man';
import { MedialistComponent } from './medialist/medialist.component';

@NgModule({
  declarations: [MedialistComponent],
  imports: [
    CommonModule,
    FileManagerModule
  ]
})
export class MediaModule { }
