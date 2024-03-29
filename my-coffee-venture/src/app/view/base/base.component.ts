import { OperationService } from '../../core/module/partial/modules/operation/operation.service';
// import { BaseListComponent } from './../../module/sticky/component/base-list.component';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/module/partial/modules/auth/auth.service';
import { WINDOW } from 'src/app/core/module/partial/services/window.service';
import { MenuItem } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseHeaderComponent implements OnInit {
  public id: number;
  items: MenuItem[];
  language: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window, private cdr: ChangeDetectorRef,
    public authService: AuthService, private router: Router,
    private operationService: OperationService,
    private translate: TranslateService
  ) {
    // window.addEventListener('scroll', this.scroll, true);
    this.language = localStorage.getItem('language') ? localStorage.getItem('language'): "vn";
    translate.setDefaultLang(this.language);
  }
  ngOnInit(): void {
    this.operationService.getNavBarViewMenu(true).subscribe(res => {
      this.items = res;
    })
  }

  // public myWindow = window.open("", "myWin");

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (offset > 85) {
      this.id = 1;
    }
    else {
      this.id = 2;
    }
  }

  onBtnRegister() {
    this.router.navigate(['login']);
  }

  onBtnLogin() {
    this.router.navigate(['login']);
  }

  onBtnLogout() {
    this.authService.logout();
    this.operationService.getNavBarViewMenu(true).subscribe(res => {
      this.items = res;
      this.cdr.detectChanges();
    })
  }
  
  useLanguage(language: string): void {
    this.language = language
    this.translate.use(language);
    localStorage.setItem('language', language)
  }
}
