import {Component, ElementRef, EventEmitter, HostListener, Output, signal, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, ParamMap, NavigationEnd} from "@angular/router";
import {LoginService} from "../login.service";
import {AudioControllerComponent} from "./audio-controller/audio-controller.component";
import { NavLink } from '../nav-link';
import { Observable, pipe } from 'rxjs';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        AudioControllerComponent,
        MenuButtonComponent
    ],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.css'
})
export class LayoutComponent {
    public path : string = ''

    @ViewChild('menuEl') menuRef!: ElementRef
    @ViewChild('menuBg') menuBg!: ElementRef
    @ViewChild('nav') navRef!: ElementRef

    
    darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'))
    @Output() sendDarkMode = new EventEmitter<boolean>(this.darkMode())

    menu = false

    public navLinks : Array<NavLink> = [
        { path : '/cites/specialist', name : 'Especialidades'},
        { path : '/cites/fast', name:'Cita'},
        { path : '/about', name: 'Sobre nosotros'}
    ]

    constructor(
        private loginSvc: LoginService,
        private router: Router
    ) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd){
                this.path = val.url

            }
        })

    }


    @HostListener('document:scroll', ['$event'])
    toggleNav(event: Event) {
        /*Scroll event*/
    }


    toggleDarkMode(icon : HTMLSpanElement): void {
        this.darkMode.set(!this.darkMode())
        icon.classList.toggle('rotate-[360deg]')
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
