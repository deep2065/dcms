import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagelistComponent } from './pagelist/pagelist.component';
import { CoreModule } from 'src/app/core/core.module';
import { PagecreateComponent } from './pagecreate/pagecreate.component';
import { FileManagerModule } from 'ng6-file-man';

@NgModule({
  declarations: [PagelistComponent, PagecreateComponent],
  imports: [
    CommonModule,
    CoreModule,
    FileManagerModule
  ]
})
export class PageModule { }
