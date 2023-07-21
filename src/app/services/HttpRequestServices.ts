import { Injectable } from '@angular/core';
import AppConstants from '../app-constants';
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

	public CustomPost(endUrl: string, param: any) {
		return this.httpClient.post<any>(endUrl, param, { headers: this.prepareHeaders() });
	}

    private prepareHeaders(): HttpHeaders {
		const headersObject = {
			'Authorization': 'Bearer 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'
		};
		return new HttpHeaders(headersObject);
	}


}