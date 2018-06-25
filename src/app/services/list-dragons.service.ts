import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon } from '../class/dragon'
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListDragonsService {

  constructor(
    private http: Http
  ) { }

  private url="https://dragons-api.herokuapp.com/api";

  getDragon(slug): Observable<any>{
    return this.http.get(this.url+"/dragons/"+slug).map(res=>res.json());
  }

  getDragons(): Observable<any>{
    return this.http.get(this.url+"/dragons").map(res=>res.json());
  }

  deleteDragons(slug:string):Observable<any>{
    return this.http.delete(this.url+"/dragons/"+slug)
      .map(res=>res.json());
  }

  saveDragon(type:string,data:Dragon,slug:string){
    let typeAction = type=="post"?"":slug;
    let url = this.url+'/dragons/'+typeAction;

    if(type=="post"){
      return this.http.post(url,data)
        .map(res=>res.json());
    }else{
      return this.http.put(url,data)
        .map(res=>res.json());
    }
  }
  
}
