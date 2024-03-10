import {Component, ElementRef, QueryList, signal, ViewChildren} from '@angular/core';
import {Element} from "@angular/compiler";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
 @ViewChildren('video') videoRef! : QueryList<ElementRef>;
 private curCos =  0;
 private videoUrls = [
     '/assets/video/review1.mp4',
     '/assets/video/review2.mp4',
     '/assets/video/review3.mp4'
]
 forward(){
     this.curCos++
     if (this.curCos >= this.videoRef.length){
         this.curCos = 0
     }
     this.videoRef.get(this.curCos)?.nativeElement.classList.toggle('-translate-x-full')
     this.videoRef.get(this.curCos+1)?.nativeElement.classList.toggle('-translate-x-full')
 }

}
