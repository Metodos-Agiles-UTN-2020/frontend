import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { HelpersService } from '../../services/helpers/helpers.service';
import { ApiService } from '../../services/api/api.service';

@Component({
	selector: "app-alta-titular",
	templateUrl: "./alta-titular.component.html",
	styleUrls: ["./alta-titular.component.scss"],
})
export class AltaTitularComponent implements OnInit {
	public TipoDocumento = TipoDocumento;
	public GrupoSanguineo = GrupoSanguineo;
	public FactorRH = FactorRH;
	public ClaseLicencia = ClaseLicencia;

	public altaTitularForm: FormGroup;
	public selectedImage;
	public displayWaitMessage = false;
	public displayNoResultMessage : string;
	public displayOK = false;

	constructor(
		private helpersService : HelpersService,
		private apiService : ApiService
	) { }

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
			'donante': new FormControl(false, Validators.required),
			'foto': new FormControl(null, Validators.required),
		});

		this.altaTitularForm.controls["tipoDocumento"].setValue("DNI");
		this.selectedImage = null;
	}

	get nombre() { return this.altaTitularForm.get('nombre'); }
	get apellido() { return this.altaTitularForm.get('apellido'); }
	get domicilio() { return this.altaTitularForm.get('domicilio'); }
	get tipoDocumento() { return this.altaTitularForm.get('tipoDocumento'); }
	get nroDocumento() { return this.altaTitularForm.get('nroDocumento'); }
	get fechaNacimiento() { return this.altaTitularForm.get('fechaNacimiento'); }
	get grupoSanguineo() { return this.altaTitularForm.get('grupoSanguineo'); }
	get factorRh() { return this.altaTitularForm.get('factorRh'); }
	get donante() { return this.altaTitularForm.get('donante'); }
	get foto() { return this.altaTitularForm.get('foto'); }

	onSubmit(f: NgForm) {
		this.displayWaitMessage = true;
		this.displayOK = false;
		this.displayNoResultMessage = "";

		this.apiService.post('/api/titular', f.value).subscribe(
			result => {
				this.displayWaitMessage = false;
				this.displayOK = true;
			},
			error => {
				if(error.status == 403) {
				}

				this.displayNoResultMessage = error.error;
				this.displayWaitMessage = false;
			}
		);
	}

	onFileSelected(event: any) {
		let reader = new FileReader();
		let file = event.target.files[0];

		reader.readAsDataURL(file);
		reader.onload = () => {
			this.helpersService
				.compressImage(reader.result, 600, 775)
				.then((compressed) => {
					this.selectedImage = compressed;
					this.altaTitularForm.controls["foto"].setValue(
						this.selectedImage
					);
				});
		};

		reader.onerror = () => (this.selectedImage = null);
	}
}
