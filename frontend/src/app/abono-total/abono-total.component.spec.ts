import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonoTotalComponent } from './abono-total.component';

describe('AbonoTotalComponent', () => {
  let component: AbonoTotalComponent;
  let fixture: ComponentFixture<AbonoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbonoTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
