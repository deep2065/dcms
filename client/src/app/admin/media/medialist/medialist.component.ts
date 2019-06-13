import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigInterface, TreeModel } from 'ng6-file-man';
import { AdminbredcrubService } from 'src/app/services/adminbredcrub.service';
import { GlobleService } from 'src/app/services/globle.service';

@Component({
  selector: 'app-medialist',
  templateUrl: './medialist.component.html',
  styleUrls: ['./medialist.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MedialistComponent implements OnInit {
  tree:any;
  constructor(private bred:AdminbredcrubService, private service:GlobleService) {
    const treeConfig: ConfigInterface = this.service.media;
    this.tree = new TreeModel(treeConfig)
  }

  ngOnInit() {
    this.bred.changeMessage("Media Management");
    this.bred.bred.push({
      title:"Media",
      url:"media"
    });
    this.bred.changeBredcrub();
  }

}
