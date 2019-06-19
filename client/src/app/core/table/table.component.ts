import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
import { DatatableService } from 'src/app/services/datatable.service';
declare var $;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input("tabledata") tabledata :any;
@Output() btnaction = new EventEmitter<any>();
defaultContent=[];
modulepermi=[];
  constructor(private service:GlobleService, private dt:DatatableService) {
   }

  ngOnInit() {
    this.service.checkPermission(this.tabledata.modulename+".list",sessionStorage.getItem("userid"),(res)=>{
      this.modulepermi=res;
    var _self=this;
    this.tabledata.buttons.forEach(element => {
      if(res.indexOf(element.permission) != -1)
      {
      var h = '<button  title="'+element.title+'" class="'+element.class+'" data-type="'+element.type+'"><i class="'+element.icon+'"></i></button> ';
      this.defaultContent.push(h);
      }
    });
    $(()=>{
      var table = $("#mytableid").DataTable({
      "processing": true,
      "serverSide": true,
      "ajax": this.service.apiUrl+'page',
      "columnDefs": [ {
        "targets": -1,
        "data": null,
        "defaultContent": _self.defaultContent.join(' ')
    } ]
    });

    $('#mytableid tbody').on( 'click', 'button', function () {
      if($(this).data("type")=="delete"){
        if(confirm("Are you sure to delete it ?"))
        {
          var data = {type:$(this).data("type"),data:table.row( $(this).parents('tr') ).data(),index:table.row( $(this).parents('tr') ).index()};
         _self.sendMessage(data);
         _self.dt.cdatatable.subscribe(a=>{
         table.ajax.reload();
         })
        }
      }else{
        var data = {type:$(this).data("type"),data:table.row( $(this).parents('tr') ).data(),index:table.row( $(this).parents('tr') ).index()};
      _self.sendMessage(data);
      }

  } );
    });

  });
  }

  sendMessage(data) {
    this.btnaction.emit(data);
  }

}
