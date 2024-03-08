import {Component, ElementRef, signal, ViewChild} from '@angular/core';

@Component({
    selector: 'app-audio-controller',
    standalone: true,
    imports: [],
    templateUrl: './audio-controller.component.html',
    styleUrl: './audio-controller.component.css'
})
export class AudioControllerComponent {
    @ViewChild('audioWindow') audioWindow!: ElementRef
    @ViewChild('openButton') openButton!: ElementRef
    @ViewChild('audioElement') audioElement!: ElementRef

    curTime = signal<number>(0);
    time = signal<number>(0)
    isOpen = signal<boolean>(false)

    ngOnInit() {


    }

    formatTime(seconds: number): string {
        let minutes =  Math.floor(seconds / 60)
        seconds = seconds % 60
        return `${minutes}:${seconds < 10 ? `0${seconds}`: seconds} `
    }

    setCurTime(value: number) {
        this.curTime.set(value)
        this.audioElement.nativeElement.currentTime = value
    }

    slideTime(value: string) {
        console.log(this.audioElement.nativeElement)
        this.setCurTime(parseInt(value))
    }

    play() {
        console.log(typeof this.audioElement.nativeElement.duration)

        let counter = setInterval(() => {
            this.curTime.set(Math.round(this.audioElement.nativeElement.currentTime))
        }, 1000)

        if (this.audioElement.nativeElement.paused)
            this.audioElement.nativeElement.play()
        else {
            this.audioElement.nativeElement.pause()
            clearInterval(counter)
        }
    }

    toggleButton() {

        this.curTime.set(this.audioElement.nativeElement.currentTime)
        this.time.set(Math.round(this.audioElement.nativeElement.duration))

        this.audioWindow.nativeElement.classList.toggle('translate-x-[87%]')
        this.openButton.nativeElement.classList.toggle('rotate-180')
        this.isOpen.set(!this.isOpen())
    }
}
