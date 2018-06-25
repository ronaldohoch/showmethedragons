import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from '../../class/login'
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login = {login:'',senha:''};

  constructor(
    private formBuilder: FormBuilder,
    private loginSvc:LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: new FormControl(this.loginData.login, {validators: Validators.required}),
      senha: new FormControl(this.loginData.senha, {validators: Validators.required}),
    });
  }

  sendLogin(){
    console.log("sendLogin");
    if(this.loginForm.status==="VALID"){
      this.loginSvc.verifyLogin(this.loginForm.value).then(result=>{
        if(result){
            this.router.navigate(['/dragons']);
        }else{
          alert("usuário ou senha inválidos");
        }
      });
    }
  }

}
