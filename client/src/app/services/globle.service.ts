import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GlobleService {
  apiUrl = 'http://localhost:4201/api/';
  isLogin=false;
  constructor(private http:HttpClient) {
    if(localStorage.getItem('login')=="1") this.isLogin=true;
   }

  login(data,callback){
    const headers = new HttpHeaders({
      'Authorization':'DCMS Login',
      'Content-Type':'application/json; charset=utf-8',
      'Deepak':"Hi"
    });    
    this.http.post(this.apiUrl+'login',data,{headers: headers}).subscribe(a=>{
      if(a['_id'])
      {
        this.isLogin=true;
        localStorage.setItem('login',"1");
        localStorage.setItem('userid',a['_id']);
        localStorage.setItem('dcmstoken',a['token']);
        callback(true);
      }else{
        callback(false);
      }
    });
  }
}
