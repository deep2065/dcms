import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [FormsComponent, InputComponent],
  imports: [
    CommonModule
  ],
  exports:[
    FormsComponent
  ]
})
export class CoreModule { }
