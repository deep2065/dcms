import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenulistComponent } from './menulist/menulist.component';
import { MenucreateComponent } from './menucreate/menucreate.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [MenulistComponent, MenucreateComponent],
  imports: [
    CommonModule,
    CoreModule,
  ]
})
export class MenuModule { }
