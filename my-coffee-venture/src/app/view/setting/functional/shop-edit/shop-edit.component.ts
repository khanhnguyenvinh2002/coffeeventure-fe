import { ShopService } from 'src/app/core/module/partial/modules/shop/shop.service';
import { ShopRequestPayload } from '../../../../core/module/partial/modules/shop/shop-request.payload';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/base/common/notification/notification.service';
import { NgForm } from '@angular/forms';
import { CancelConfirmation, SaveConfirmation } from 'src/app/core/base/common/confirmation';
import { AuthService } from 'src/app/core/module/partial/modules/auth/auth.service';
import { forkJoin, Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './shop-edit.component.html',
  styleUrls: ['./shop-edit.component.css']
})
export class ShopEditComponent implements OnInit {

  public subscriptions: Subscription[] = [];
  public shopRequest = new ShopRequestPayload();
  public userName: string;
  public dataSource: any = {};
  public cols = [
    { width: '50px', header: 'No' },
    { width: '100px', header: 'Name' },
    { width: '300px', header: 'Address' },
    { width: '200px', header: 'Category' },
    { width: '70px', header: '', maxWidth: '50px', class: 'action' },
  ];

  constructor(public shopService: ShopService, private authService: AuthService, private cd: ChangeDetectorRef, private router: Router, private noti: NotificationService) { }

  ngOnInit(): void {
    this.shopRequest.pageIndex = 0;
    this.shopRequest.pageSize = 12;
    this.initData();
  }
  /**
   * 
   * @param event handle page change event
   */
  public onPageChange(event: PageEvent) {
    this.shopRequest.pageIndex = event.pageIndex;
    this.shopRequest.pageSize = event.pageSize;
    this.initData();
  }
  /**
   * 
   * init data
   */
  public initData() {
    const $selectAndCount = [
      this.shopService.select(this.shopRequest),
      this.shopService.count(this.shopRequest)];

    const sub = forkJoin($selectAndCount).subscribe(
      (response: any[]) => {

        this.userName = this.authService.getUser();
        this.dataSource.items = response[0];
        this.dataSource.paginatorTotal = response[1];

        if (this.cd && !this.cd['destroyed']) {
          this.cd.detectChanges();
        }
      });

    this.cd.detectChanges();
    this.subscriptions.push(sub);
    this.cd.detectChanges();
  }

  /**
   *  view shop based on shop id
   */
  public viewShop(id: any) {
    this.router.navigate([`apps/shop/shop-item/${id}`]);
  }
  /**
   * delete event
   * @param id shop id
   */
  public onBtnDeleteClick(id) {
    this.shopService.delete(id).subscribe(res => {
      this.noti.showSuccess();
      this.initData();
      this.cd.detectChanges();
    })
  }
  /**
   * edit event
   * @param id 
   */
  public onBtnEditClick(id) {
    this.router.navigate([`app/shop/shop-item-edit/${id}`]);
  }
  
  ngOnDestroy() {
    this.subscriptions.forEach(e => e.unsubscribe());
  }
}
