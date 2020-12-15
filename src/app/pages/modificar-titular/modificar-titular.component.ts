import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';

@Component({
	selector: 'app-modificar-titular',
	templateUrl: './modificar-titular.component.html',
	styleUrls: ['./modificar-titular.component.scss'],
})
export class ModificarTitularComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	public TipoDocumento = TipoDocumento;
	public GrupoSanguineo = GrupoSanguineo;
	public FactorRH = FactorRH;
	public buscarTitularForm: FormGroup;
	public modificarTitularForm: FormGroup;
	public search = false;
	public result = false;
	public displayWaitMessage = false;
	public displayForm = false;
	public displayNoResultMessage = false;
	public displayError : string;
	public displayOK = false;
	public photoSrc = '';

	ngOnInit(): void {
		this.buscarTitularForm = new FormGroup({
			tipoDocumento: new FormControl(null, Validators.required),
			nroDocumento: new FormControl(null, Validators.required),
		});
	}

	buscarTitular(f: NgForm) {
		this.displayForm = false;
		this.displayWaitMessage = true;
		this.displayNoResultMessage = false;
		this.apiService
		.get('/api/titular/' + f.value.tipoDocumento + '/' + f.value.nroDocumento)
		.subscribe(
			(result) => {
				this.displayWaitMessage = false;
				if (result.body !== null) {
					this.modificarTitularForm = new FormGroup({
						'id': new FormControl(result.body['id'], Validators.required),
						'nombre': new FormControl(result.body['nombre'], Validators.required),
						'apellido': new FormControl(result.body['apellido'], Validators.required),
						'domicilio': new FormControl(result.body['domicilio'], Validators.required),
						'tipoDocumento': new FormControl(result.body['tipoDocumento'], Validators.required),
						'nroDocumento': new FormControl(result.body['nroDocumento'], [Validators.required, Validators.pattern('^[0-9]+')]),
						'fechaNacimiento': new FormControl(result.body['fechaNacimiento'], Validators.required),
						'grupoSanguineo': new FormControl(result.body['grupoSanguineo'], Validators.required),
						'factorRh': new FormControl(result.body['factorRh'], Validators.required),
						'donante': new FormControl(result.body['donante'], Validators.required),
						'foto': new FormControl(result.body['foto'], Validators.required),
					});
					this.displayForm = true;
					this.displayNoResultMessage = false;
					this.photoSrc = result.body['foto'];
				} else {
					this.displayNoResultMessage = true;
				}

          /*this.modificarTitularForm.controls['nombre'].setValue(
            result.body['nombre']
          );
          this.modificarTitularForm.controls['apellido'].setValue(
            result.body['apellido']
            );*/

          /*this.altaLicenciaForm.controls['idTitular'].setValue(
            result.body['id']
            );*/
        },
        (error) => {
        	this.displayWaitMessage = false;
        	if (error.status == 403) {
        	}
        	else if(error.status == 404) {
        		this.displayNoResultMessage = true;
        	}
        }
        );
	}

	modificarTitular(f: NgForm) {
		this.displayOK = false;
		this.displayError = "";
		this.displayWaitMessage = true;
		this.apiService.post('/api/updatetitular', f.value).subscribe(
			(result) => {
				this.displayOK = true;
				this.displayWaitMessage = false;
			},
			(error) => {
				this.displayError = error.error;
				this.displayWaitMessage = false;
			}
		);
	}
}
