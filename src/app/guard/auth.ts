import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class Auth {
    constructor(private router: Router) { }

    isLogged: boolean = sessionStorage.getItem("isLogged")=="true"?true:false;

    canActivate(): boolean{
        if(this.isLogged){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false
        }
        // this.router.navigate(['/home']);
        // return false;
    }
}
