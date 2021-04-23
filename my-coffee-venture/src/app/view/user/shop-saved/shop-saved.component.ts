import { AuthService } from './../../../module/sticky/modules/auth/auth.service';
import { NotificationService } from './../../../module/sticky/common/notification/notification.service';
import { UserShopRequestPayload } from './../../../module/sticky/modules/user-shop/user-shop-request.payload';
import { UserShopService } from './../../../module/sticky/modules/user-shop/user-shop.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/module/sticky/component';

@Component({
  selector: 'app-shop-saved',
  templateUrl: './shop-saved.component.html',
  styleUrls: ['./shop-saved.component.css']
})
export class ShopSavedComponent implements OnInit {
  public userShopRequest = new UserShopRequestPayload();
  public userName: string;
  public items: any;
  public cols = [
    { width: '50px', header: 'No' },
    { width: '100px', header: 'Name' },
    { width: '300px', header: 'Address' },
    { width: '200px', header: 'Category' },
    { width: '70px', header: '', maxWidth: '50px', class: 'action' },
  ];

  constructor(private userShopService: UserShopService, private authService: AuthService, private cd: ChangeDetectorRef, private router: Router, private noti: NotificationService) { }

  ngOnInit(): void {
    this.userShopService.select(this.userShopRequest).subscribe(res => {
      this.items = res;
    })
  }

  public viewYield(id: any) {
    this.router.navigate([`apps/shop/shop-item/${id}`]);
  }
  public onBtnDeleteClick(id) {
    this.userName = this.authService.getUser();
    this.userShopRequest.shopId = id;
    this.userShopService.deleteShopFromUser(this.userShopRequest).subscribe(res => {
      this.noti.showSuccess();
      this.userShopService.select(this.userShopRequest).subscribe(res => {
        this.items = res;
      })
      this.cd.detectChanges();
    })
  }
}
