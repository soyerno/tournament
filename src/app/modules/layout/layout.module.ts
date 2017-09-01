import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdMenuModule, MdIconModule, MdButtonModule } from '@angular/material';

import { RoutingModule } from './../routing/routing.module';

import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthModule } from './../../modules/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    RouterModule,
    MdMenuModule,
    MdIconModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    AuthModule,
  ],
  exports: [BaseLayoutComponent],
  declarations: [HeaderComponent, BaseLayoutComponent]
})
export class LayoutModule { }