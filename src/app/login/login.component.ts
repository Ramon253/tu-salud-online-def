import {Component, EventEmitter, Output} from '@angular/core';
import {Location} from "@angular/common";
import {Route, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    private isLogged = false
    @Output() auth = new EventEmitter<boolean>()
    constructor(private router: Router) {
    }
    logUser(){
        this.isLogged = true
        return this.auth.emit(this.isLogged)
    }
    goBack(){

    }
}
