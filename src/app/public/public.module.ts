import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SlideComponent } from './slide/slide.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public/public.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, SlideComponent, SitestatComponent, NavbarComponent, PublicComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    SlideComponent,
    SitestatComponent,
  ],
})
export class PublicModule { }
