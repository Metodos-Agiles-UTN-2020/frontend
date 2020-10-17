import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';

@Component({
  selector: 'app-alta-titular',
  templateUrl: './alta-titular.component.html',
  styleUrls: ['./alta-titular.component.scss']
})
export class AltaTitularComponent implements OnInit {

  public TipoDocumento = TipoDocumento;
  public GrupoSanguineo = GrupoSanguineo;
  public FactorRH = FactorRH;
  public ClaseLicencia = ClaseLicencia;

  altaTitularForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.altaTitularForm = new FormGroup({
      'nombre': new FormControl(null, Validators.required),
      'apellido': new FormControl(null, Validators.required),
      'domicilio': new FormControl(null, Validators.required),
      'tipoDocumento': new FormControl(null, Validators.required),
      'nroDocumento': new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+')]),
      'fechaNacimiento': new FormControl(null, Validators.required),
      'grupoSanguineo': new FormControl(null, Validators.required),
      'factorRh': new FormControl(null, Validators.required),
      'claseLicencia': new FormControl(null, Validators.required),
    });

    this.altaTitularForm.controls['tipoDocumento'].setValue("DNI");
  }

  get nombre() { return this.altaTitularForm.get('nombre'); }
  get apellidoTitular() { return this.altaTitularForm.get('apellido'); }
  get domicilio() { return this.altaTitularForm.get('domicilio'); }
  get tipoDocumento() { return this.altaTitularForm.get('tipoDocumento'); }
  get nroDocumento() { return this.altaTitularForm.get('nroDocumento'); }
  get fechaNacimiento() { return this.altaTitularForm.get('fechaNacimiento'); }
  get grupoSanguineo() { return this.altaTitularForm.get('grupoSanguineo'); }
  get factorRH() { return this.altaTitularForm.get('factorRh'); }
  get claseLicencia() { return this.altaTitularForm.get('claseLicencia'); }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

}
