import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { FileManagerModule } from 'ng6-file-man';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [FormsComponent, InputComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    FileManagerModule
  ],
  exports:[
    FormsComponent,
    InputComponent

  ]
})
export class CoreModule { }
