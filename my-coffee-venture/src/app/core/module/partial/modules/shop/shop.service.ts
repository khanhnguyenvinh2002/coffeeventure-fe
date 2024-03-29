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

export class ShopService extends HttpService {
    constructor() {
        super();
        this.url = this.origin + 'shop';
    }
    public viewShop(requestPayload?: RequestPayload, isSpinner?: boolean): Observable<any[]> {
        requestPayload = !requestPayload ? new RequestPayload() : requestPayload;
        return this.intercept(this.httpClient.get<any[]>(this.url + "/view",
            { observe: 'response', headers: this.getHeaders(), params: requestPayload.toParams() }), isSpinner)
            .pipe(map(r => r.body));
    }
    public deleteCategory(id: string, isSpinner?: boolean): Observable<boolean> {
        return this.intercept(this.httpClient.delete(`${this.url}/delete-category/${id}`,
            { observe: 'response', headers: this.getHeaders() }), isSpinner)
            .pipe(map(r => r.body));
    }
    public bulkMergeShopCategory(body: string[], shopId: string, isSpinner?: boolean): Observable<boolean> {
        return this.intercept(this.httpClient.post<boolean>(`${this.url}/merge-shop-category/${shopId}`, JSON.stringify(body),
            { observe: 'response', headers: this.getHeaders() }), isSpinner)
            .pipe(map(r => r.body));
    }

    public mergeCategory(body: BaseResponse, isSpinner?: boolean): Observable<boolean> {
        return this.intercept(this.httpClient.post<boolean>(`${this.url}/merge-category`, JSON.stringify(body),
            { observe: 'response', headers: this.getHeaders() }), isSpinner)
            .pipe(map(r => r.body));
    }
    public selectShopCategory(shopId: string, isSpinner?: boolean): Observable<string[]> {
        return this.intercept(this.httpClient.get<string[]>(`${this.url}/select-shop-category/${shopId}`,
            { observe: 'response', headers: this.getHeaders() }), isSpinner)
            .pipe(map(r => r.body));
    }

    public selectShopSearch(requestPayload?: RequestPayload, isSpinner?: boolean): Observable<any> {
        requestPayload = !requestPayload ? new RequestPayload() : requestPayload;
        return this.intercept(this.httpClient.get<any>(this.url + "/select-shop-search",
            { observe: 'response', headers: this.getHeaders(), params: requestPayload.toParams() }), isSpinner)
            .pipe(map(r => r.body));
    }

    public selectCategory(requestPayload?: RequestPayload, isSpinner?: boolean): Observable<any> {
        requestPayload = !requestPayload ? new RequestPayload() : requestPayload;
        return this.intercept(this.httpClient.get<any>(this.url + "/select-category",
            { observe: 'response', headers: this.getHeaders(), params: requestPayload.toParams() }), isSpinner)
            .pipe(map(r => r.body));
    }
    public countCategory(requestPayload?: RequestPayload, isSpinner?: boolean): Observable<number> {
        requestPayload = !requestPayload ? new RequestPayload() : requestPayload;
        return this.intercept(this.httpClient.get<number>(this.url + '/count-category',
            { observe: 'response', headers: this.getHeaders(), params: requestPayload.toParams() }), isSpinner)
            .pipe(map(r => r.body));
    }

    public uploadShopImages(id: string, formData: FormData, isSpinner?: boolean, params?: any): Observable<any> {
        return this.intercept(this.httpClient.post<any>(`${this.url}/upload-images/${id}`, formData, {
            observe: 'response', headers: new HttpHeaders({
                Authorization: 'Bearer ' + this.getCookie("AccessToken"),
                'AccessToken': this.getToken(),
            }), params: this.toParams(params), reportProgress: true
        }), isSpinner)
            .pipe(map(r => r.body));
    }

    public mergeShopWithImage(body: BaseResponse, formData: FormData, isSpinner?: boolean, params?: any): Observable<any> {
        return this.intercept(this.httpClient.post<any>(`${this.url}/merge`, formData, {
            observe: 'response', headers: new HttpHeaders({
                'content-type': 'multipart/form-data; charset=utf-8',
                Authorization: 'Bearer ' + this.getCookie("AccessToken"),
                'AccessToken': this.getToken(),
                // "body": JSON.stringify(body)
            }), params: this.toParams(params), reportProgress: true
        }), isSpinner)
            .pipe(map(r => r.body));
    }


}
