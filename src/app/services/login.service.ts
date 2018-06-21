import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {}

  verifyLogin(formData){

    if(formData.login=="admin" && formData.senha=="teste123"){
      sessionStorage.setItem("isLogged","true");
      return true;
    }else{
      return false;
    }

  }

}
