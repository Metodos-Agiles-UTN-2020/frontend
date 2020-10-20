import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { ApiService } from '../../services/api/api.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

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
		private router : Router,
	) { }

	ngOnInit(): void {
		if(this.authService.isUserLoggedIn()) {
			this.router.navigate(['/']);
		}

		this.loginForm = new FormGroup({
			'username': new FormControl(null, Validators.required),
			'password': new FormControl(null, Validators.required),
		});
	}

	get username() { return this.loginForm.get('username'); }
	get password() { return this.loginForm.get('password'); }

	onSubmit(f : NgForm) {
		this.authService.checkLogin(f.value).subscribe(
			loginResult => {
				this.apiService.setToken(loginResult.headers.get('token'));

				this.authService.getLoggedInUser().subscribe(
					userResult => {
						this.authService.setLoggedInUser(userResult.body);

						this.loginError = "";
						this.router.navigate(['/']);
					},
					error => {
						this.loginError = "Ha ocurrido un error. Intente nuevamente.";
						this.authService.cleanUpUser();
					}
				);

			},
			error => {
				if(error.status == 403) {
					this.loginError = "Usuario y/o contraseña incorrectos";
				}
			}
		);
	}
}
