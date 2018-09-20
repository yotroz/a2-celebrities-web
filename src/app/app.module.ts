import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelebritiesListComponent } from './components/celebrities/celebrities-list/celebrities-list.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { CelebritiesFormComponent } from './components/celebrities/celebrities-form/celebrities-form.component';
import { CelebritiesDetailsComponent } from './components/celebrities/celebrities-details/celebrities-details.component';



@NgModule({
  declarations: [
    AppComponent,
    CelebritiesListComponent,
    HeaderComponent,
    CelebritiesFormComponent,
    CelebritiesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
