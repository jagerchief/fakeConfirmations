import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { TabsSelectorComponent } from './components/tabs-selector/tabs-selector.component';
import { StartWidgetComponent } from './components/start-widget/start-widget.component';
import { ButtonComponent } from './components/button/button.component';
import { FlightsComponent } from './containers/flights/flights.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabsSelectorComponent,
    StartWidgetComponent,
    ButtonComponent,
    FlightsComponent,
    FlightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
