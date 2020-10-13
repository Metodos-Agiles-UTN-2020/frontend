import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ApiService } from '../api/api.service';
import { UserLogin } from '../../classes/UserLogin/user-login';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	private loginUrl : string;

	constructor(
		private router: Router,
		private apiService : ApiService
	) {
		this.loginUrl = '/api/login';
	}

	checkLogin(userLogin : UserLogin) : Observable<HttpResponse<HttpResponse<any>>> {
		return this.apiService.post(this.loginUrl, userLogin);
	}
}
