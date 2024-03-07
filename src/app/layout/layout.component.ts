import {Component, ElementRef, EventEmitter, Output, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @ViewChild('menu') menuRef!: ElementRef
  @ViewChild('menuBg') menuBg!: ElementRef
  darkMode = signal<boolean>(JSON.parse(window.localStorage.getItem('darkMode') ?? 'false'))

  @Output() sendDarkMode = new EventEmitter<boolean>(this.darkMode())
  menu = false

  constructor(private loginSvc: LoginService) {
  }

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode())
    return this.sendDarkMode.emit(this.darkMode())
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

  toggleMenu(): void {
    this.menuRef.nativeElement.classList.toggle('translate-x-full')
    this.menuBg.nativeElement.classList.toggle('hidden')
    this.menu = !this.menu
  }

}
