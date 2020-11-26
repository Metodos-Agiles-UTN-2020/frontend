import { Component } from '@angular/core';
import { ApiService } from './services/api/api.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './services/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'frontend';

	public loading : boolean;
	public currentRoute : string;

	constructor(
		private apiService : ApiService,
		public router : Router,
		private authService: AuthService,
	) {
		this.loading = true;
	}

	ngOnInit() {
		let token = this.apiService.getToken();
		
		if(token != null) {
			this.authService.getLoggedInUser().subscribe(
				result => {
					this.authService.setLoggedInUser(result.body);

					if(this.router.url == '/login') {
						this.router.navigate(['/']);
					}
					
					this.loading = false;
				},
				error => {
					this.authService.cleanUpUser();
					this.router.navigate(['/login']);
					this.loading = false;
				}
			);
		}
		else {
			this.router.navigate(['/login']);
			this.loading = false;
		}

		this.currentRoute = this.router.url;
	}
}
