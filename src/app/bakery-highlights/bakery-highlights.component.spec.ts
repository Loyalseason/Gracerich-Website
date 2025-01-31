import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryHighlightsComponent } from './bakery-highlights.component';

describe('BakeryHighlightsComponent', () => {
  let component: BakeryHighlightsComponent;
  let fixture: ComponentFixture<BakeryHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryHighlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
