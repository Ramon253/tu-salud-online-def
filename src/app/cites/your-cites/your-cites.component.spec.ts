import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCitesComponent } from './your-cites.component';

describe('YourCitesComponent', () => {
  let component: YourCitesComponent;
  let fixture: ComponentFixture<YourCitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourCitesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
