import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileModule } from './directives/file/file.module';
import { BackgroundModule } from './directives/background/background.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileModule,
    BackgroundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
