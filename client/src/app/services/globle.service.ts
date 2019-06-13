import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobleService {
  apiUrl = 'http://localhost:4201/api/';
  baseurl = 'http://localhost:4201';
  isLogin=false;
  media={
    baseURL: this.apiUrl,
    api: {
      listFile: 'media/list',
      uploadFile: 'media/upload',
      downloadFile: 'media/download',
      deleteFile: 'media/remove',
      createFolder: 'media/directory',
      renameFile: 'media/rename',
      searchFiles: 'media/search'
    },
    options: {
      allowFolderDownload: false,
      showFilesInsideTree: false
    }
  };
  constructor(private http:HttpClient,private router:Router) {
    if(sessionStorage.getItem('login')=="1") this.isLogin=true;
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
        sessionStorage.setItem('login',"1");
        sessionStorage.setItem('userid',a['_id']);
        sessionStorage.setItem('dcmstoken',a['token']);
        callback(true);
      }else{
        callback(false);
      }
    });
  }


  getAll(col,callback){
    this.http.get(this.apiUrl+col).subscribe(a=>callback(a));
  }
  getById(col,id,callback){
    this.http.get(this.apiUrl+col+"/"+id).subscribe(a=>callback(a));
  }
  deleteById(col,id,callback){
    this.http.delete(this.apiUrl+col+"/"+id).subscribe(a=>callback(a));
  }


  insert(col,data,callback){
    const headers = new HttpHeaders({
      'Authorization':'DCMS Login',
      'Content-Type':'application/json; charset=utf-8'
    });
    this.http.post(this.apiUrl+col,data,{headers: headers}).subscribe(a=>callback(a));
  }

  checkPermission(per,userid,callback){
    this.http.get(this.apiUrl+"chkpermission/"+per+"/"+userid).subscribe(a=>{
      if(a['status']!="1"){
        this.router.navigate(['admin/dashboard']);
        throw "Permission Error";
      }else{
        callback(a['data']);
      }
    })
  }
}
