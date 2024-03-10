import {Component, ElementRef, QueryList, ViewChildren, Output, signal, EventEmitter} from '@angular/core';
import {LoginService} from "../login.service";
import {HomeComponent} from "./home/home.component";
import {CitesComponent} from "./cites/cites.component";
import {ReviewsComponent} from "./reviews/reviews.component";

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [HomeComponent, CitesComponent, ReviewsComponent],
    templateUrl: './index.component.html',
    styleUrl: './index.component.css'
})
export class IndexComponent {
    @ViewChildren('sliderImage') images!: QueryList<ElementRef>
    firstPos = 0

    getNextImage(pos = 0) {
        let prevPos = (pos === 0) ? this.images.length - 1 : pos - 1

        this.images.get(pos)?.nativeElement.classList.toggle('translate-x-full')
        this.images.get(prevPos)?.nativeElement.classList.toggle('translate-x-full')

        return (pos === this.images.length - 1) ? 0 : pos
    }

    constructor(private loginSvg: LoginService) {
        setInterval(() => {
            this.firstPos =  this.getNextImage(this.firstPos)
        }, 1000 * 5)
    }
}
