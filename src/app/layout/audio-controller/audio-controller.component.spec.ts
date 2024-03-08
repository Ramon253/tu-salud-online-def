import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioControllerComponent } from './audio-controller.component';

describe('AudioControllerComponent', () => {
  let component: AudioControllerComponent;
  let fixture: ComponentFixture<AudioControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudioControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudioControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
