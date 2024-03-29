import {Component, ElementRef, EventEmitter, HostListener, Output, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoginService} from "../login.service";
import {AudioControllerComponent} from "./audio-controller/audio-controller.component";

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        AudioControllerComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
    @ViewChild('menu') menuRef!: ElementRef
    @ViewChild('menuBg') menuBg!: ElementRef
    @ViewChild('nav') navRef!: ElementRef

    darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'))
    @Output() sendDarkMode = new EventEmitter<boolean>(this.darkMode())
    menu = false

    constructor(
        private loginSvc: LoginService
    ) {
    }

    @HostListener('document:scroll', ['$event'])
    toggleNav(event: Event) {
        /*Scroll event*/
    }


    toggleDarkMode(): void {
        this.darkMode.set(!this.darkMode())
        return this.sendDarkMode.emit(this.darkMode())
    }

    toggleMenu(): void {
        this.menuRef.nativeElement.classList.toggle('translate-x-full')
        this.menuBg.nativeElement.classList.toggle('hidden')
        this.menu = !this.menu
    }

    isLogged() {
        return this.loginSvc.getIsLogged()
    }

    logout() {
        this.loginSvc.logout()
    }

    login() {
        this.loginSvc.login()
    }

    getMenu(): boolean {
        return this.menu
    }


}
