import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main';

import { HeaderComponent } from './components/header';
import { SummaryComponent } from './components/summary';
import { DateRangeComponent } from './components/daterange';
import { IndicatorComponent } from './components/indicator';
import { ExposureChartComponent } from './components/exposurechart';
import { DeltaComponent } from './components/delta';

import {Services} from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    SummaryComponent,
    IndicatorComponent,
    DateRangeComponent,
    DeltaComponent,
    ExposureChartComponent],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
