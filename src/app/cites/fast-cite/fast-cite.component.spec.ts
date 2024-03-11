import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastCiteComponent } from './fast-cite.component';

describe('FastCiteComponent', () => {
  let component: FastCiteComponent;
  let fixture: ComponentFixture<FastCiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastCiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FastCiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
