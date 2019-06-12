import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigInterface, TreeModel } from 'ng6-file-man';

@Component({
  selector: 'app-medialist',
  templateUrl: './medialist.component.html',
  styleUrls: ['./medialist.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MedialistComponent implements OnInit {
  tree:any;
  constructor() { 
    const treeConfig: ConfigInterface = {
      baseURL: 'http://localhost:4201/',
      api: {
        listFile: 'api/media/list',
        uploadFile: 'api/media/upload',
        downloadFile: 'api/media/download',
        deleteFile: 'api/media/remove',
        createFolder: 'api/media/directory',
        renameFile: 'api/media/rename',
        searchFiles: 'api/media/search'
      },
      options: {
        allowFolderDownload: true,
        showFilesInsideTree: true
      }
    };
    this.tree = new TreeModel(treeConfig)
  }

  ngOnInit() {
  }

}
