import { ChangeDetectorRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { forkJoin, Subscription } from 'rxjs';
import { merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpService } from '../common/http/http.service';
import { BaseFormComponent } from './base-form.component';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'base-list',
    template: "<div></div>"
})
export class BaseListComponent extends BaseFormComponent implements OnInit, OnDestroy {
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    public headers = [];
    public mainConfig: any;
    public request: any = {};
    public subscriptions: Subscription[] = [];
    public baseService: HttpService;
    public formTitle: string;
    public cd: ChangeDetectorRef;
    public dataSource = {
        items: null,
        paginatorTotal: undefined
    };
    public subCountAndLoad: Subscription;
    public fnSelectName = 'select';
    public fnCountName = 'count';
    public fnSuccess: () => void;

    /**
     * When init component
     */
    ngOnInit() {
        this.initData();
        this.pagingData();
    }

    /**
     * When destroy component
     */
    ngOnDestroy() {
        this.subscriptions.forEach(el => el.unsubscribe());
    }

    /**
     * Initialize data for screen
     */
    public initData(isPaging: boolean = false): void {
        // Cancelled service and next to necessary service
        // if (!!this.subCountAndLoad) {
        //   this.subCountAndLoad.unsubscribe();
        // }

        if (this.paginator) {
            this.request.pageIndex = isPaging ? this.paginator.pageIndex : 0;
            this.request.pageSize = (isPaging && this.paginator.pageSize) ? this.paginator.pageSize : 5;

            this.paginator.pageIndex = isPaging ? this.paginator.pageIndex : 0;
            this.paginator.pageSize = isPaging ? this.paginator.pageSize : 5;
        }
        const requests = [
            this.baseService[this.fnSelectName](this.request),
            this.baseService[this.fnCountName](this.request)];

        this.subCountAndLoad = forkJoin(requests).subscribe(
            (response: any[]) => {
                this.dataSource.items = response[0];
                this.dataSource.paginatorTotal = response[1];
                if (this.fnSuccess) { this.fnSuccess(); }
                // tslint:disable-next-line:no-string-literal
                if (this.cd && !this.cd['destroyed']) {
                    this.cd.detectChanges();
                }
            });

        this.subscriptions.push(this.subCountAndLoad);
    }

    /**
     * Paging data
     */
    public pagingData(): void {
        if (this.paginator) {
            const paginatorSubscriptions = merge(this.paginator.page).pipe(
                tap(() => {
                    this.initData(true);
                })
            ).subscribe();
            this.subscriptions.push(paginatorSubscriptions);
        }
    }
}
