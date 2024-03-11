import {Component, ElementRef, QueryList, signal, ViewChildren, ViewChild} from '@angular/core';
import {Element} from "@angular/compiler";
import {NgStyle} from "@angular/common";

@Component({
    selector: 'app-reviews',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './reviews.component.html',
    styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
    @ViewChildren('video') videoRef!: QueryList<ElementRef>;
    @ViewChild('videoContainer') video!: ElementRef;
    curCos = signal<number>(0);

    forward() {
        this.curCos.set(this.curCos() + 1)
        if (this.curCos() >= this.videoRef.length) {
            this.curCos.set(0)
        }
        this.video.nativeElement.offsetHeight
    }

    backward() {
        this.curCos.set(this.curCos() - 1)
        console.log(this.curCos())
        if (this.curCos() < 0)
            this.curCos.set(this.videoRef.length -1)
    }
}
