import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { PermissionComponent } from './permission/permission.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RolecreateComponent } from './rolecreate/rolecreate.component';
import { RolePipe } from 'src/app/pipes/role.pipe';
import { GetrolePipe } from 'src/app/pipes/getRole.pipe';

@NgModule({
  declarations: [
    RoleComponent,
    PermissionComponent,
    UsercreateComponent,
    UserlistComponent,
    RolecreateComponent,
    RolePipe,
    GetrolePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class UsersModule { }
