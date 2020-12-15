import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { HelpersService } from '../../services/helpers/helpers.service';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.scss']
})
export class AltaUsuarioComponent implements OnInit {
	constructor(private apiService: ApiService) {}

	public TipoDocumento = TipoDocumento;
	public altaUsuarioForm: FormGroup;
	public displayWaitMessage = false;
	public displayForm = false;
	public displayOK = false;
	public displayError = "";

	ngOnInit(): void {
		this.altaUsuarioForm = new FormGroup({
			username: new FormControl(null, Validators.required),
			password: new FormControl(null, Validators.required),
			nombre: new FormControl(null, Validators.required),
			apellido: new FormControl(null, Validators.required),
			mail: new FormControl(null, Validators.required),
			tipoUsuario: new FormControl("ADMINISTRATIVO", Validators.required),
			dni: new FormControl(null, Validators.required),
		});
	}

	get username() { return this.altaUsuarioForm.get('username'); }
	get password() { return this.altaUsuarioForm.get('password'); }
	get nombre() { return this.altaUsuarioForm.get('nombre'); }
	get apellido() { return this.altaUsuarioForm.get('apellido'); }
	get mail() { return this.altaUsuarioForm.get('mail'); }
	get dni() { return this.altaUsuarioForm.get('dni'); }
	get tipoUsuario() { return this.altaUsuarioForm.get('tipoUsuario'); }

	altaUsuario(f: NgForm) {
		this.displayWaitMessage = true;
		this.displayOK = false;
		this.displayError = "";

		this.apiService.post('/api/user', f.value).subscribe(
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
