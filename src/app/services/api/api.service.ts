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

	get(url: string, data: any) {
		return this.http.get<HttpResponse<any>>(url, {
			withCredentials: true,
			observe: 'response',
			headers: this.token ? new HttpHeaders('Authorization: ' + this.token) : {}
		});
	}

	post(url: string, data: any) {
		return this.http.post<HttpResponse<any>>(url, data, {
			withCredentials: true,
			observe: 'response',
			headers: this.token ? new HttpHeaders('Authorization: ' + this.token) : {}
		});
	}

	setToken(token : string) {
		this.token = token;
		console.log("token seteado: " + token);
	}
}
