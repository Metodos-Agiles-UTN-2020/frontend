import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

import { TipoDocumento } from '../../enums/tipo-documento.enum';

@Component({
  selector: 'app-alta-titular',
  templateUrl: './alta-titular.component.html',
  styleUrls: ['./alta-titular.component.scss']
})
export class AltaTitularComponent implements OnInit {

  public TipoDocumento = TipoDocumento;

  altaTitularForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.altaTitularForm = new FormGroup({
      'nombreTitular': new FormControl(null, Validators.required),
      'apellidoTitular': new FormControl(null, Validators.required),
      'domicilioTitular': new FormControl(null, Validators.required),
      'tipoDocumentoTitular': new FormControl(null, Validators.required),
      'nroDocumentoTitular': new FormControl(null, Validators.required),
      'fechaNacimientoTitular': new FormControl(null, Validators.required),
    });

    this.altaTitularForm.controls['tipoDocumentoTitular'].setValue("DNI");
  }

  get nombreTitular() { return this.altaTitularForm.get('nombreTitular'); }
  get apellidoTitular() { return this.altaTitularForm.get('apellidoTitular'); }
  get domicilioTitular() { return this.altaTitularForm.get('domicilioTitular'); }
  get tipoDocumentoTitular() { return this.altaTitularForm.get('tipoDocumentoTitular'); }
  get nroDocumentoTitular() { return this.altaTitularForm.get('nroDocumentoTitular'); }
  get fechaNacimientoTitular() { return this.altaTitularForm.get('fechaNacimientoTitular'); }

  onSubmit(f: NgForm) {
    console.log("buenardopolis");
  }

}
