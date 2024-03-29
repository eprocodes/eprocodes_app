import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NewsListing } from './pages/news/newslisting';
import { HeaderComponent } from './masterpages/header/header.component';
import { CreateNews } from './pages/createNews/createnews';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Login } from './pages/login/login';
import { Chat } from './pages/chat/chat';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NewsListing,
    CreateNews,
    Login,
    Chat,
    HeaderComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    HttpModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
