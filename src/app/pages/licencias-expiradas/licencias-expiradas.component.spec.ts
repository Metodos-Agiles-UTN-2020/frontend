import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasExpiradasComponent } from './licencias-expiradas.component';

describe('LicenciasExpiradasComponent', () => {
  let component: LicenciasExpiradasComponent;
  let fixture: ComponentFixture<LicenciasExpiradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciasExpiradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciasExpiradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
