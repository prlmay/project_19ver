import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesForServicesComponent } from './prices-for-services.component';

describe('PricesForServicesComponent', () => {
  let component: PricesForServicesComponent;
  let fixture: ComponentFixture<PricesForServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesForServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesForServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
