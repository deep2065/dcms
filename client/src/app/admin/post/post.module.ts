import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';
import { PostcreateComponent } from './postcreate/postcreate.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [PostlistComponent, PostcreateComponent, CategorylistComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class PostModule { }
