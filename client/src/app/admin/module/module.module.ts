import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulelistComponent } from './modulelist/modulelist.component';
import { ModulecreateComponent } from './modulecreate/modulecreate.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModulelistComponent, ModulecreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModuleModule { }
