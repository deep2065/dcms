import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ngx-ckeditor';
import { FileManagerModule } from 'ng6-file-man';
import { TableComponent } from './table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormsComponent, InputComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    FileManagerModule,
    RouterModule
  ],
  exports:[
    FormsComponent,
    InputComponent,
    TableComponent

  ]
})
export class CoreModule { }
