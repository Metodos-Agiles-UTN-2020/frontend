import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
//import { Licencia } from '../../classes/'

@Component({
	selector: 'app-licencias-vigentes',
	templateUrl: './licencias-vigentes.component.html',
	styleUrls: ['./licencias-vigentes.component.scss']
})
export class LicenciasVigentesComponent implements OnInit {

	//private listaLicencias : Licencia[];
	public buscarLicenciasForm: FormGroup;

	public licencias : number[];

	constructor() { }

	ngOnInit(): void {
		this.buscarLicenciasForm = new FormGroup({
			'nombre': new FormControl(null, Validators.required),
			'apellido': new FormControl(null, Validators.required),
			'grupoSanguineo': new FormControl(null, Validators.required),
			'factorRh': new FormControl(null, Validators.required),
			'donante': new FormControl(null, Validators.required)
		});
	}

	get nombre() { return this.buscarLicenciasForm.get('nombre'); }
	get apellido() { return this.buscarLicenciasForm.get('apellido'); }
	get grupoSanguineo() { return this.buscarLicenciasForm.get('grupoSanguineo'); }
	get factorRh() { return this.buscarLicenciasForm.get('factorRh'); }
	get donante() { return this.buscarLicenciasForm.get('donante'); }

	onSubmit(f: NgForm) {
		console.log(f.value);
	}

	getLicencias() {
		return this.licencias;
	}
}
