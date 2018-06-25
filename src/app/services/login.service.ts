import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {}

  verifyLogin(formData): Promise<any>{

    if(formData.login=="admin" && formData.senha=="teste123"){
      sessionStorage.setItem("isLogged","true");
      return new Promise(resolve => 
        setTimeout(() => resolve(true), 500)
      );
    }else{
      sessionStorage.setItem("isLogged","false");
      return new Promise(resolve => 
        setTimeout(() => resolve(false), 500)
      );
    }

  }

}
