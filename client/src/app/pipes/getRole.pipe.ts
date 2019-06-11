import { Pipe, PipeTransform } from '@angular/core';
import { GlobleService } from '../services/globle.service';

@Pipe({
  name: 'getrole'
})
export class GetrolePipe implements PipeTransform {

  constructor(private service :GlobleService){}

 async transform(value: any, args?: any) {
    var name='ddd';
   await this.service.getById("roles",value.role, async (res)=>{
      name = await res.name;
    });
    console.log(name);
    return name;
  }

}
