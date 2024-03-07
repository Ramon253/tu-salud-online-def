import {Component, effect, HostBinding, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {LoginComponent} from "./login/login.component";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, LayoutComponent, LoginComponent, AsyncPipe, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    darkMode = signal<boolean>(JSON.parse( window.localStorage.getItem('darkMode')  ?? 'false'))

    @HostBinding('class.dark') get mode() {
      console.log('Bind')
      console.log(this.darkMode())
        return this.darkMode()
    }

    toggleDarkMode(ev: boolean) {
        this.darkMode.set(ev)
    }

    constructor() {
        effect(() => {
            window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()))
        });
    }
}
