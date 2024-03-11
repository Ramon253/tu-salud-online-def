import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cites',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './cites.component.html',
  styleUrl: './cites.component.css'
})
export class CitesComponent {

}
