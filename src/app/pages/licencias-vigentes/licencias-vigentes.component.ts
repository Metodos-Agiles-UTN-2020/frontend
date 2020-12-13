import { Component, OnInit } from '@angular/core';
import { GrupoSanguineo } from '../../enums/grupo-sanguineo.enum';
import { FactorRH } from '../../enums/factor-rh.enum';
import { ApiService } from '../../services/api/api.service';
import {
	NgForm,
	FormGroup,
	FormControl,
	Validators,
	AbstractControl,
	ReactiveFormsModule,
	FormBuilder,
} from '@angular/forms';

//import { Licencia } from '../../classes/'

@Component({
	selector: 'app-licencias-vigentes',
	templateUrl: './licencias-vigentes.component.html',
	styleUrls: ['./licencias-vigentes.component.scss'],
})
export class LicenciasVigentesComponent implements OnInit {
	//private listaLicencias : Licencia[];
	public buscarLicenciasForm: FormGroup;

	public licencias: number[];
	public GrupoSanguineo = GrupoSanguineo;
	public FactorRH = FactorRH;
	private params = '';
	public searched: boolean;

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.buscarLicenciasForm = new FormGroup({
			nombre: new FormControl(null),
			apellido: new FormControl(null),
			grupoSanguineo: new FormControl(null),
			factorRh: new FormControl(null),
			donante: new FormControl(null),
		});

		this.searched = false;
	}

	get nombre() {
		return this.buscarLicenciasForm.get('nombre');
	}
	get apellido() {
		return this.buscarLicenciasForm.get('apellido');
	}
	get grupoSanguineo() {
		return this.buscarLicenciasForm.get('grupoSanguineo');
	}
	get factorRh() {
		return this.buscarLicenciasForm.get('factorRh');
	}
	get donante() {
		return this.buscarLicenciasForm.get('donante');
	}

	onSubmit(f: NgForm) {
		let params = new URLSearchParams();

		for (let key in f.value) {
			if(f.value[key] == null || f.value[key] == '') continue;
			params.set(key, f.value[key]);
		}

		this.apiService.get('/api/licencias?' + params.toString()).subscribe(
			//this.apiService.get('/api/licencias?').subscribe(
			// para testear si hay licencias
			(result) => {
				this.licencias = result.body['pagina'];
				console.log(result.body);
				console.log(result.body['cantidadResultadosTotales']);
				this.searched = true;
			},
			(error) => {
				switch (error.status) {
					case 403:
					console.log('FORBIDDEN');
					break;
					case 400:
					console.log('BAD REQUEST');
					break;
				}
			}
			);
	}

	getLicencias() {
		return this.licencias;
	}
}
