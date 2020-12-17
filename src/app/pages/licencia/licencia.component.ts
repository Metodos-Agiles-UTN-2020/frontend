import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-licencia',
	templateUrl: './licencia.component.html',
	styleUrls: ['./licencia.component.scss']
})
export class LicenciaComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private apiService : ApiService
	) {
	}

	public TipoDocumento = TipoDocumento;
	public ClaseLicencia = ClaseLicencia;
	public altaLicenciaForm: FormGroup;
	public buscarTitularForm: FormGroup;
	public titularFound: boolean;
	public displayWaitMessage: boolean;
	public displayErrorMessage: string;
	public added: boolean;
	public licenseFront: string;
	public licenseBack: string;
	public reverse: boolean;
	public printable: boolean;
	public ticket: string;
	public id : number;

	ngOnInit(): void {
		this.id = parseInt(this.route.snapshot.paramMap.get('id'));

		this.displayWaitMessage = false;
		this.displayErrorMessage = "";
		this.licenseFront = "";
		this.licenseBack = "";
		this.reverse = false;
		this.printable = false;
		this.ticket = "";

		console.log(this.id);
		this.getLicencia();
	}

	getLicencia() {
		this.displayWaitMessage = true;
		this.apiService.get('/api/licencia/' + this.id).subscribe(
			result => {
				console.log(result);
				this.licenseFront = result.body['licenciaFrente'];
				this.licenseBack = result.body['licenciaAtras'];
				this.ticket = result.body['ticket'];
			},
			error => {
				if(error.status == 403) {
					
				}
				this.displayErrorMessage = error.error;
			}
		);
	}

	reverseCard() {
		this.reverse = !this.reverse;
	}
}
