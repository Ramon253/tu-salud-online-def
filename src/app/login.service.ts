import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    isLogged = false
    login(){
        this.isLogged = true
    }
    logout(){
        this.isLogged = false
    }
    getIsLogged(){
        return this.isLogged
    }
    constructor() {
    }
}
