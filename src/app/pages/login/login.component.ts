import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from '../../class/login'
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginData: Login = {login:'',senha:''};

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: new FormControl(this.loginData.login, {validators: Validators.required}),
      senha: new FormControl(this.loginData.senha, {validators: Validators.required}),
    });
  }

  sendLogin(){
    console.log("loginForm",this.loginForm.value);
  }

}
