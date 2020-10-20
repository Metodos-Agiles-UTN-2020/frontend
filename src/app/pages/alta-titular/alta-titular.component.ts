import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { ReadVarExpr } from '@angular/compiler';
import { resolve, Resolver } from 'dns';
import { rejects } from 'assert';

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

  public altaTitularForm: FormGroup;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) { }

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
      'condicionDonante': new FormControl(null, Validators.required),
      'foto': new FormControl(null, Validators.required),
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
  get condicionDonante() { return this.altaTitularForm.get('condicionDonante'); }
  get foto() { return this.altaTitularForm.get('foto'); }
  get claseLicencia() { return this.altaTitularForm.get('claseLicencia'); }

  onSubmit(f: NgForm) {
    console.log(f.value);
  }

  onFileSelected(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    
  
    reader.onload = function () {
      console.log(reader.result);
      //altaTitularForm.get("foto").setValue(reader.result);
    }    

    //console.log(reader.result);
  
    reader.onerror = function (error) {
      console.log('Error: ');
    };
 


  }


}


