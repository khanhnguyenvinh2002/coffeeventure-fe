// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaseResponse } from '../../../../base/common/http/base-response.model';
import { HttpService } from '../../../../base/common/http/http.service';
import { RequestPayload } from '../../../../base/common/http/request-payload.model';

@Injectable({
    providedIn: 'root'
})

export class ReviewService extends HttpService {
    constructor() {
        super();
        this.url = this.origin + 'review';
    }
    public selectUsersById(id: string, isSpinner?: boolean): Observable<any> {
        return this.intercept(this.httpClient.get<any>(`${this.url}/review-like/${id}`,
            { observe: 'response', headers: this.getHeaders() }), isSpinner)
            .pipe(map(r => r.body));
    }

    public like(body: BaseResponse, isSpinner?: boolean, params?: any): Observable<any> {
        return this.intercept(this.httpClient.post<any>(`${this.url}/like`,
            JSON.stringify(body), { observe: 'response', headers: this.getHeaders(), params: this.toParams(params) }), isSpinner)
            .pipe(map(r => r.body));
    }


    public selectReviewsByShop(requestPayload?: RequestPayload, isSpinner?: boolean): Observable<any[]> {
        requestPayload = !requestPayload ? new RequestPayload() : requestPayload;
        return this.intercept(this.httpClient.get<any[]>(this.url + "/select-review-by-shop",
            { observe: 'response', headers: this.getHeaders(), params: requestPayload.toParams() }), isSpinner)
            .pipe(map(r => r.body));
    }
    public uploadReviewImages(id: string, formData: FormData, isSpinner?: boolean, params?: any): Observable<any> {
        return this.intercept(this.httpClient.post<any>(`${this.url}/upload-images/${id}`, formData, {
            observe: 'response', headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.getCookie("AccessToken"),
                'AccessToken': this.getToken(),
            }), params: this.toParams(params), reportProgress: true
        }), isSpinner)
            .pipe(map(r => r.body));
    }
    public mergeReviewWithImage(body: BaseResponse, formData: FormData, isSpinner?: boolean, params?: any): Observable<any> {
        return this.intercept(this.httpClient.post<any>(`${this.url}/merge`, formData, {
            observe: 'response', headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.getCookie("AccessToken"),
                'AccessToken': this.getToken(),
                "body": JSON.stringify(body)
            }), params: this.toParams(params), reportProgress: true
        }), isSpinner)
            .pipe(map(r => r.body));
    }
}