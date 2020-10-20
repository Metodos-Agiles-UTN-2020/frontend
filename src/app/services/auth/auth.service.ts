import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiService } from '../api/api.service';
import { UserLogin } from '../../classes/UserLogin/user-login';
import { UserData } from '../../classes/UserData/user-data';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	private loginUrl : string;
	private userUrl : string;
	private userData : UserData;

	constructor(
		private router: Router,
		private apiService : ApiService
	) {
		this.loginUrl = '/api/login';
		this.userUrl = '/api/user';
		this.userData = null;
	}

	checkLogin(userLogin : UserLogin) : Observable<HttpResponse<HttpResponse<any>>> {
		return this.apiService.post(this.loginUrl, userLogin);
	}

	getLoggedInUser() {
		return this.apiService.get(this.userUrl);
	}

	getCurrentUser() : UserData {
		return this.userData;
	}

	isUserLoggedIn() : boolean {
		return !(this.userData === null);
	}

	setLoggedInUser(userData : any) {
		this.userData = userData;
	}

	cleanUpUser() {
		this.userData = null;
		this.apiService.clearToken();
	}
}
