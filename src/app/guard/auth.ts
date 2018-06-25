import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class Auth {
    constructor(private router: Router) { }

    isLogged: boolean = sessionStorage.getItem("isLogged")=="true"?true:false;

    canActivate(): boolean{
        this.isLogged = sessionStorage.getItem("isLogged")=="true"?true:false;
        if(this.isLogged){
            return true;
        }
        this.router.navigate(['/login']);
        return false
    }
}
