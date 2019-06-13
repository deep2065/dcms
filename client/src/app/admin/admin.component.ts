import { Component, OnInit } from '@angular/core';
import { AdminbredcrubService } from '../services/adminbredcrub.service';
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
          {{pagetitle}}
        </h1>
        <ol class="breadcrumb">
          <li *ngFor="let b of cbredcrub; let ind=index" class="{{cbredcrub.length==(ind+1)?'active':''}}">
          <a *ngIf="cbredcrub.length!=(ind+1) else elstitle" href="{{b.url}}">{{b.title}}</a>
          <ng-template #elstitle>
          {{b.title}}
          </ng-template>
          </li>
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
pagetitle="Dashboard";
cbredcrub:any;
  constructor(private bred:AdminbredcrubService) { }

  ngOnInit() {
    document.body.className="hold-transition skin-blue sidebar-mini";
    this.bred.currentTitle.subscribe(a=>{
      this.pagetitle=a;
    });

    this.bred.currentBredcrub.subscribe(b=>{
      this.cbredcrub=b;
    })
  }

}
