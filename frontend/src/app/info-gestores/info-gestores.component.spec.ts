import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGestoresComponent } from './info-gestores.component';

describe('InfoGestoresComponent', () => {
  let component: InfoGestoresComponent;
  let fixture: ComponentFixture<InfoGestoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGestoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGestoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
