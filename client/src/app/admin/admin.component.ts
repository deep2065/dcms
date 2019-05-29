import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-admin',
  template: `
  <div class="wrapper">
  <app-topbar></app-topbar>
  <app-menubar></app-menubar>

  <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Dashboard
          <small>Version 2.0</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li class="active">Dashboard</li>
        </ol>
      </section>
      <!-- Main content -->
<section class="content">
  <router-outlet></router-outlet>
</section>
  </div>
  <app-footer></app-footer>
  <app-settingbar></app-settingbar>
</div>

  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.className="hold-transition skin-blue sidebar-mini";
  }

}
