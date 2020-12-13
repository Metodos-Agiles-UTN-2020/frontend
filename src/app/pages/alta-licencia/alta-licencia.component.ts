import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { ApiService } from '../../services/api/api.service';

@Component({
	selector: 'app-alta-licencia',
	templateUrl: './alta-licencia.component.html',
	styleUrls: ['./alta-licencia.component.scss']
})
export class AltaLicenciaComponent implements OnInit {

	constructor(
		private apiService : ApiService
		) { }

	public TipoDocumento = TipoDocumento;
	public ClaseLicencia = ClaseLicencia;
	public altaLicenciaForm: FormGroup;
	public buscarTitularForm: FormGroup;

	ngOnInit(): void {
		this.buscarTitularForm = new FormGroup({
			'tipoDocumento': new FormControl(null, Validators.required),
			'nroDocumento': new FormControl(null, Validators.required),
			'nombre': new FormControl({ value: null, disabled: true }),
			'apellido': new FormControl({ value: null, disabled: true }),
		});

		this.altaLicenciaForm = new FormGroup({
			'idTitular': new FormControl(null, Validators.required),
			'codigoLicencia': new FormControl(null, Validators.required),
			'limitaciones': new FormControl(null, Validators.required),
			'observaciones': new FormControl(null, Validators.required),
		});
	}

	get tipoDocumento() { return this.buscarTitularForm.get('tipoDocumento'); }
	get nroDocumento() { return this.buscarTitularForm.get('nroDocumento'); }
	get nombre() { return this.buscarTitularForm.get('nombre'); }
	get apellido() { return this.buscarTitularForm.get('apellido'); }

	get idTitular() { return this.altaLicenciaForm.get('idTitular'); }
	get codigoLicencia() { return this.altaLicenciaForm.get('codigoLicencia'); }
	get limitaciones() { return this.altaLicenciaForm.get('limitaciones'); }
	get observaciones() { return this.altaLicenciaForm.get('observaciones'); }

	buscarTitular(f: NgForm) {
		this.apiService.get('/api/titular/' + f.value.tipoDocumento + '/' + f.value.nroDocumento + '').subscribe(
			result => {
				this.buscarTitularForm.controls['nombre'].setValue(result.body['nombre']);
				this.buscarTitularForm.controls['apellido'].setValue(result.body['apellido']);
				this.altaLicenciaForm.controls['idTitular'].setValue(result.body['id']);
			},
			error => {
				if(error.status == 403) {
					
				}
			}
		);
	}

	onSubmit(f: NgForm) {
		this.apiService.post('/api/licencia', f.value).subscribe(
			loginResult => {
				console.log(loginResult)
			},
			error => {
				if(error.status == 403) {
				}
			}
		);
	}
}
