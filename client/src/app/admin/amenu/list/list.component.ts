import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
declare var $;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
menus:any;
  constructor(private service : GlobleService) { }

  ngOnInit() {
    var _self = this;
   this.service.getAll("menus",function(res){
    _self.menus=res;
    });

    $(()=>{
      $('#example1').DataTable()
      $('#example2').DataTable({
        'paging'      : true,
        'lengthChange': false,
        'searching'   : false,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
      })
    })
  }

  deleteMenu(id,ind){
    if(confirm("Are you sure to delete menu?")){
      this.service.deleteById("menus",id,(a)=>{
        this.menus.splice(ind,1);
      })
     
    }
  }

}
