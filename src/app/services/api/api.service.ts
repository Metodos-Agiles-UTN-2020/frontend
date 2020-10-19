import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	token : string;

	constructor(
		private http: HttpClient,
	) {
		this.token = null;
	}

	get(url: string) {
		return this.http.get<HttpResponse<any>>(url, {
			withCredentials: true,
			observe: 'response',
			headers: this.getToken() ? new HttpHeaders('Authorization: ' + this.getToken()) : {}
		});
	}

	post(url: string, data: any) {
		return this.http.post<HttpResponse<any>>(url, data, {
			withCredentials: true,
			observe: 'response',
			headers: this.getToken() ? new HttpHeaders('Authorization: ' + this.getToken()) : {}
		});
	}

	getToken() {
		return this.token == null ? localStorage.getItem('token') : this.token;
	}

	setToken(token : string) {
		this.token = token;
		localStorage.setItem('token', token);
	}
}
