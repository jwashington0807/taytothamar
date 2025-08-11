import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbComponent } from './blurb.component';

describe('BlurbComponent', () => {
  let component: BlurbComponent;
  let fixture: ComponentFixture<BlurbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlurbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
