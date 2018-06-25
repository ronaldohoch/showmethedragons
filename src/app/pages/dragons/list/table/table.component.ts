import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListDragonsService } from '../../../../services/list-dragons.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {
  
  @Input() dragons: object;
  @Output() clickEvent = new EventEmitter;

  constructor(
    private listSvc: ListDragonsService
  ) { }

  ngOnInit() {
  }

  emitEventDragon(event,slug:string,type:string){
    event.preventDefault();
    this.clickEvent.emit({
      "slug":slug,
      "type":type
    });
  }

}
