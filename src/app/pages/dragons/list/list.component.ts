import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dragons;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.forEach((data)=>{
      this.dragons = data.dragons;
  });
  }

}
