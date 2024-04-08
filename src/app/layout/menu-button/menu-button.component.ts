import { Component, ElementRef, Input, QueryList, SimpleChanges, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.css'
})
export class MenuButtonComponent {
  @ViewChildren('menu') menuElements! : QueryList<ElementRef>
  @Input({required : true}) menu : boolean = false;
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['menu'].previousValue !== changes['menu'].currentValue)
      this.toggleMenu()
  }
  toggleMenu(...elemnts : Array<HTMLDivElement>){
    this.menuElements.first.nativeElement.classList.toggle('firstCross')
    this.menuElements.get(1)!.nativeElement.classList.toggle('hidden')
    this.menuElements.last.nativeElement.classList.toggle('secondCross')
  }
}
