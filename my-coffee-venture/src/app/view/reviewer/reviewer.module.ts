import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewerRoutingModule } from './reviewer-routing.module';
import { ReviewerComponent } from './reviewer.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReviewerComponent],
  imports: [
    CommonModule,
    ReviewerRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class ReviewerModule { }
