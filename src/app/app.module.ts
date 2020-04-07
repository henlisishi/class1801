import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// BrowserAnimationsModule is required
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

// 第三方组件
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';


import {PublicModule} from './public/public.module'
import {AuthorityManagementModule}from'./authority-management/authority-management.module';

import {HeroDetailComponent}from'./authority-management/hero-detail.component';
import {HeroesComponent}from'./authority-management/heroes.component';

import {HeroesgasComponent} from "./authority-management/heroesgas.component";

import {HeroDetailwgComponent} from "./authority-management/hero-detailwg.component";
// 路由模块
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },




  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'heroesgas',     component: HeroesgasComponent },
  { path: 'heroDetailwg/:id',     component: HeroDetailwgComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [

    AuthorityManagementModule,
    ChartsModule,
    PublicModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    //ToastrModule.forRoot({timeOut: 1000, positionClass: 'toast-bottom-right'}),
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
