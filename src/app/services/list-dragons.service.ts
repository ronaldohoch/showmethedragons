import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListDragonsService {

  constructor(
    private http: Http
  ) { }

  private url="https://dragons-api.herokuapp.com/api";

  getDragons(): Observable<any>{
    return this.http.get(this.url+"/dragons").map(res=>res.json().items);
  }
}
