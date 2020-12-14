import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
	selector: 'app-modificar-usuario',
	templateUrl: './modificar-usuario.component.html',
	styleUrls: ['./modificar-usuario.component.scss'],
})
export class ModificarUsuarioComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	public TipoDocumento = TipoDocumento;
	public buscarUsuarioForm: FormGroup;
	public modificarUsuarioForm: FormGroup;
	public search = false;
	public result = false;
	public displayWaitMessage = false;
	public displayForm = false;
	public displayNoResultMessage = false;
	public photoSrc = '';

	ngOnInit(): void {
		this.buscarUsuarioForm = new FormGroup({
			dni: new FormControl(null, Validators.required),
		});

		this.modificarUsuarioForm = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required),
			email: new FormControl(null, Validators.required),
		});
	}

	get dni() { return this.buscarUsuarioForm.get('dni'); }

	buscarUsuario(f: NgForm) {
		this.displayForm = false;
		this.displayWaitMessage = true;
		this.displayNoResultMessage = false;
		this.apiService.get('/api/user/' + f.value.dni + '').subscribe(
			(result) => {
				this.displayWaitMessage = false;
				if (result.body !== null) {
          /*
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
          	this.displayNoResultMessage = true;*/
          }
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
