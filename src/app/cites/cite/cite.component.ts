import { Component } from '@angular/core';

@Component({
  selector: 'app-cite',
  standalone: true,
  imports: [],
  templateUrl: './cite.component.html',
  styleUrl: './cite.component.css'
})
export class CiteComponent {
    specialities = [
        'Cardiologo',
        'Pediatra',
        'Neurologo',
        'Traumatologo',
        'Otorrino'
    ]
}
