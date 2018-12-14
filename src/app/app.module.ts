import { BrowserModule } from '@angular/platform-browser';
import { NgModel, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { HomeComponent } from './home/home.component';
import { CountryFilterPipe } from './home/country-filter.pipe';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    HomeComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountriesRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatListModule, MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
