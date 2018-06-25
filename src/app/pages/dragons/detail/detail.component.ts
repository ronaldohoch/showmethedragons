import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Dragon } from '../../../class/dragon'
import { ListDragonsService } from '../../../services/list-dragons.service';

declare let alertify: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  slug:string="";
  formTitle:string = "Cadastrar Dragão";
  formEdit: FormGroup;
  dragonData:Dragon = {name:'',type:'',histories:''};
  
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private listSvc: ListDragonsService
  ) { }

  createForm(data:Dragon){
    this.formEdit = this.formBuilder.group({
      name: new FormControl({value: data.name,disabled: this.slug==undefined}, Validators.required),
      // name: new FormControl(data.name, {validators: Validators.required}),
      type: new FormControl(data.type, {validators: Validators.required}),
      histories: new FormControl(data.histories, {validators: Validators.required})
    });
  }

  ngOnInit() {
    this.createForm(this.dragonData);

    this.route.params.subscribe( params =>{
      this.slug = params.slug
      this.formTitle = "Editar dragão";
      
      if(this.slug!=undefined){
        this.listSvc.getDragon(this.slug).subscribe(res=>{
          this.dragonData.name = res.name;
          this.dragonData.type = res.type;
          this.dragonData.histories = res.histories.join(', ');
          this.createForm(this.dragonData);
        });
      }
    }); 
  }

  sendForm(){
    console.log("dragonData",this.formEdit.value);
    // let formData = this.formEdit.value;
    let type = this.slug!=undefined?"put":"post";

    this.listSvc.saveDragon(type, this.formEdit.value, this.slug||'')
      .subscribe(res=>{
        if(res.hasOwnProperty("created_at")){
          alertify.notify("Dragão salvo com sucesso",'success',5);
          this.dragonData = {name:'',type:'',histories:''};
          this.createForm(this.dragonData);
        }else if(res.hasOwnProperty("nModified") && res.nModified>=1){
          alertify.notify("Dragão alterado com sucesso!",'success',5);
        }
      })
  }
  
  // onFormSubmit(){
  // }

}
