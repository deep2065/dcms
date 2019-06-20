import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerylistComponent } from './gallerylist/gallerylist.component';
import { GallerycreateComponent } from './gallerycreate/gallerycreate.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [GallerylistComponent, GallerycreateComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class GalleryModule { }
