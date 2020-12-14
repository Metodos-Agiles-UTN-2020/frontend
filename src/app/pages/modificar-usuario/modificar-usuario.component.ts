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
			id: new FormControl(null, Validators.required),
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required),
			email: new FormControl(null, Validators.required),
			dni: new FormControl(null, Validators.required)
		});
	}

	get dni() { return this.buscarUsuarioForm.get('dni'); }

	buscarUsuario(f: NgForm) {
		this.displayForm = false;
		this.displayWaitMessage = true;
		this.displayNoResultMessage = false;
		this.apiService.get('/api/user/' + f.value.dni).subscribe(
			(result) => {
				this.displayWaitMessage = false;
				this.modificarUsuarioForm = new FormGroup({
					id: new FormControl(result.body['id']),
					username: new FormControl(result.body['username']),
					tipousuario: new FormControl(result.body['tipousuario']),
					nombre: new FormControl(result.body['nombre']),
					apellido: new FormControl(result.body['apellido']),
					dni: new FormControl(result.body['dni']),
					mail: new FormControl(result.body['mail']),
				});

				this.displayForm = true;
				this.displayNoResultMessage = false;
				this.photoSrc = result.body['foto'];
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

	modificarUsuario(f: NgForm) {
		this.apiService.put('/api/user', f.value).subscribe(
			(result) => {
			},
			(error) => {
			}
		);
	}
}
