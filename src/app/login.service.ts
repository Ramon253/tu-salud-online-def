import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    username = "Ramon"
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
