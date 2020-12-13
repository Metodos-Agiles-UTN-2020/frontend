import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenciasVigentesComponent } from './licencias-vigentes.component';

describe('LicenciasVigentesComponent', () => {
  let component: LicenciasVigentesComponent;
  let fixture: ComponentFixture<LicenciasVigentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenciasVigentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenciasVigentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
