import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTitularComponent } from './modificar-titular.component';

describe('ModificarTitularComponent', () => {
  let component: ModificarTitularComponent;
  let fixture: ComponentFixture<ModificarTitularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTitularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
