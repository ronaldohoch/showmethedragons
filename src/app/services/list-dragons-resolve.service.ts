import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ListDragonsService } from './list-dragons.service';

@Injectable()
export class ListDragonsResolveService {

  constructor(private dragonSvc: ListDragonsService) { }
  
  resolve(route: ActivatedRouteSnapshot) {
    // debugger;
    return this.dragonSvc.getDragons();
  }
}