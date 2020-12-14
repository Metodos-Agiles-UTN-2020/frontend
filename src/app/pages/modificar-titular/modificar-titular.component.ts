import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-modificar-titular',
	templateUrl: './modificar-titular.component.html',
	styleUrls: ['./modificar-titular.component.scss'],
})
export class ModificarTitularComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	public TipoDocumento = TipoDocumento;
	public buscarTitularForm: FormGroup;
	public modificarTitularForm: FormGroup;
	public search = false;
	public result = false;
	public displayWaitMessage = false;
	public displayForm = false;
	public displayNoResultMessage = false;
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
						tipoDocumento: new FormControl(
							result.body['tipoDocumento'],
							Validators.required
							),
						nroDocumento: new FormControl(
							result.body['nroDocumento'],
							Validators.required
							),
						nombre: new FormControl(result.body['nombre']),
						apellido: new FormControl(result.body['apellido']),
						domicilio: new FormControl(result.body['domicilio']),
						donante: new FormControl(result.body['donante']),
						foto: new FormControl(result.body['foto']),
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
        }
        );
	}

	modificarTitular(f: NgForm) {
		console.log('handle modificar titular');
		console.log(f.value);
	}
}
