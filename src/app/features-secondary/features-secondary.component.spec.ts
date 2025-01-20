import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesSecondaryComponent } from './features-secondary.component';

describe('FeaturesSecondaryComponent', () => {
  let component: FeaturesSecondaryComponent;
  let fixture: ComponentFixture<FeaturesSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
