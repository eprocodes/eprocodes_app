import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpRequestsService {
	baseUrl: string = AppConstants.baseUrl;

	constructor(public httpClient: HttpClient) { }

	public Get(endUrl: string) {
		return this.httpClient.get(this.baseUrl + endUrl, { headers: this.prepareHeaders() });
	}

    public Post(endUrl: string, param: any) {
		return this.httpClient.post<any>(this.baseUrl + endUrl, param, { headers: this.prepareHeaders() });
	}

    private prepareHeaders(): HttpHeaders {
		const headersObject = {};
		return new HttpHeaders(headersObject);
	}


}