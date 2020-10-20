import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor(
		private authService : AuthService,
		private router : Router
	) { }

	ngOnInit(): void {
	}

	getUserName() {
		let curUser = this.authService.currentUser;

		return curUser == null ? "" : curUser.username;
	}

	logOut() {
		this.authService.cleanUpUser();
		this.router.navigate(['/login']);
	}
}
