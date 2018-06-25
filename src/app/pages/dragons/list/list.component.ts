import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListDragonsService } from '../../../services/list-dragons.service';

declare let alertify: any;
// import "../../../../../node_modules/alertifyjs/build/alertify.min.js";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dragons;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listSvc: ListDragonsService
  ) { }

  ngOnInit() {
    this.route.data.forEach((data)=>{
      this.dragons = data.dragons.items;
    });
  }

  refreshList(){
    this.listSvc.getDragons().subscribe(resp=>{
      this.dragons=resp.items;
    })
  }

  callEditDragon(slug){
    this.router.navigate(['/dragons/detail',slug]);
  }

  callDeleteDragon(slug){
    this.listSvc.deleteDragons(slug).subscribe(res=>{
      console.log("res",res);
      if(res.ok==1 && res.n>=1){
        alertify.notify("Deletado com sucesso",'success',5)
        this.refreshList();
      }else{
        alertify.notify("Ocorreu um erro ao deletar",'warning',5)
      }
    });
  }

  clickReciver(data){
    if(data.type=="edit"){
      this.callEditDragon(data.slug);
    }else if(data.type="delete"){
      this.callDeleteDragon(data.slug);
    }
  }

}