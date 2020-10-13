import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;
	loginError: string;

	constructor(
		private authService: AuthService,
		private apiService: ApiService,
	) { }

	ngOnInit(): void {

		this.loginForm = new FormGroup({
			'username': new FormControl(null, Validators.required),
			'password': new FormControl(null, Validators.required),
		});
	}

	get username() { return this.loginForm.get('username'); }
	get password() { return this.loginForm.get('password'); }

	onSubmit(f : NgForm) {
		console.log(f.value);

		this.authService.checkLogin(f.value).subscribe(
			result => {
				this.loginError = "";
				this.apiService.setToken(result.headers.get('token'));

				// aca hacemos algo si loguea bien
			},
			error => {
				if(error.status == 403) {
					this.loginError = "Usuario y/o contraseña incorrectos";
				}
			}
		);
	}
}
