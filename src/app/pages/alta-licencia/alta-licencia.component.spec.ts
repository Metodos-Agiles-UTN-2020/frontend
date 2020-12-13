import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaLicenciaComponent } from './alta-licencia.component';

describe('AltaLicenciaComponent', () => {
  let component: AltaLicenciaComponent;
  let fixture: ComponentFixture<AltaLicenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaLicenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaLicenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
