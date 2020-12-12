import { Component, OnInit } from "@angular/core";
import { GrupoSanguineo } from "../../enums/grupo-sanguineo.enum";
import { FactorRH } from "../../enums/factor-rh.enum";
import { ApiService } from "../../services/api/api.service";
import {
	NgForm,
	FormGroup,
	FormControl,
	Validators,
	AbstractControl,
	ReactiveFormsModule,
	FormBuilder,
} from "@angular/forms";

//import { Licencia } from '../../classes/'

@Component({
	selector: "app-licencias-vigentes",
	templateUrl: "./licencias-vigentes.component.html",
	styleUrls: ["./licencias-vigentes.component.scss"],
})
export class LicenciasVigentesComponent implements OnInit {
	//private listaLicencias : Licencia[];
	public buscarLicenciasForm: FormGroup;

	public licencias: number[];
	public GrupoSanguineo = GrupoSanguineo;
	public FactorRH = FactorRH;
	private params = "";

	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		this.buscarLicenciasForm = new FormGroup({
			nombre: new FormControl(null),
			apellido: new FormControl(null),
			grupoSanguineo: new FormControl(null),
			factorRh: new FormControl(null),
			donante: new FormControl(null),
		});
	}

	get nombre() {
		return this.buscarLicenciasForm.get("nombre");
	}
	get apellido() {
		return this.buscarLicenciasForm.get("apellido");
	}
	get grupoSanguineo() {
		return this.buscarLicenciasForm.get("grupoSanguineo");
	}
	get factorRh() {
		return this.buscarLicenciasForm.get("factorRh");
	}
	get donante() {
		return this.buscarLicenciasForm.get("donante");
	}

	onSubmit(f: NgForm) {
		let params = new URLSearchParams();

		for(let key in f.value){
			params.set(key, f.value[key]);
		}

		this.apiService.get('/api/v1.0/licencias?' + params.toString()).subscribe(
			(loginResult) => {
				console.log(loginResult);
			},
			(error) => {
				if (error.status == 403) {
				}
			}
		);
	}

	getLicencias() {
		return this.licencias;
	}
}
