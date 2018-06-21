import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

@Injectable()
export class LoginService {

  constructor() {}

  verifyLogin(formData): Promise<any>{

    if(formData.login=="admin" && formData.senha=="teste123"){
      sessionStorage.setItem("isLogged","true");
      return Promise.resolve(true);
    }else{
      return Promise.resolve(false);
    }

  }

}
