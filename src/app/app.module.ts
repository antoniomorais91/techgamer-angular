import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';

//Views
import { HeaderComponent } from './views/header/header.component';
import { BannerHomeComponent } from './views/banner-home/banner-home.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { BannerHomeTextComponent } from './views/banner-home-text/banner-home-text.component';
import { GalleryModule } from  'ng-gallery';
import { LightboxModule } from  'ng-gallery/lightbox';
import { BannerHomeText2Component } from './views/banner-home-text2/banner-home-text2.component';
import { NewsHomeComponent } from './views/news-home/news-home.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerHomeComponent,
    GalleryComponent,
    BannerHomeTextComponent,
    BannerHomeText2Component,
    NewsHomeComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    SwiperModule,
    GalleryModule,
    LightboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
