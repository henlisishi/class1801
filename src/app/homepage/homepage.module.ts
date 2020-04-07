import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomecarouselComponent } from './homecarousel/homecarousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomepageComponent, HomecarouselComponent]
})
export class HomepageModule { }
