import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TipoDocumento } from '../../enums/tipo-documento.enum';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ClaseLicencia } from 'src/app/enums/clase-licencia.enum';
import { HelpersService } from '../../services/helpers/helpers.service';

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
	public selectedImage;

	constructor(
		private helpersService : HelpersService
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
			'condicionDonante': new FormControl(null, Validators.required),
			'foto': new FormControl(null, Validators.required),
			'tipoLicencia': new FormControl(null, Validators.required),
			'observaciones': new FormControl(null),
		});

		this.altaTitularForm.controls['tipoDocumento'].setValue("DNI");
		this.selectedImage = null;
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
	get tipoLicencia() { return this.altaTitularForm.get('tipoLicencia'); }

	onSubmit(f: NgForm) {
		console.log(f.value);
	}

	onFileSelected(event: any) {
		let reader = new FileReader();
		let file = event.target.files[0];

		reader.readAsDataURL(file);
		reader.onload = () => {
			this.helpersService.compressImage(reader.result, 250, 250).then(compressed => {
				this.selectedImage = compressed;
				this.altaTitularForm.controls['foto'].setValue(this.selectedImage);
			});
		}

		reader.onerror = () => this.selectedImage = null;
	}
}
