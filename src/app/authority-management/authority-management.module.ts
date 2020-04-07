import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from "@angular/router";
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule }    from '@angular/forms';

import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { Hero1Service }          from './hero1.service';
import { Hero2Service }          from './hero2.service';
import { HeroSearchComponent }  from './hero-search.component';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroesgasComponent }      from './heroesgas.component';

import {HeroDetailwgComponent}from'./hero-detailwg.component'
@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [

    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
HeroesgasComponent,

    HeroDetailwgComponent
  ],
  providers: [ HeroService ,Hero1Service,Hero2Service]
})
export class AuthorityManagementModule { }
