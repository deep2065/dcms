import { Component, OnInit } from '@angular/core';
import { GlobleService } from 'src/app/services/globle.service';
declare var $;

@Component({
  selector: 'app-modulelist',
  templateUrl: './modulelist.component.html',
  styleUrls: ['./modulelist.component.css']
})
export class ModulelistComponent implements OnInit {
moduls:any;
  constructor(private service:GlobleService) { }

  ngOnInit() {
this.service.getAll("modules",(res)=>{
  this.moduls = res;
});
$(()=>{
  $("#example1").DataTable();
})
  }

  deleteModule(id,ind){
    if(confirm("Are you sure to delete this module?")){
      this.service.deleteById("modules",id,(res)=>{
        this.moduls.splice(ind,1);
      })
    }
  }

}
