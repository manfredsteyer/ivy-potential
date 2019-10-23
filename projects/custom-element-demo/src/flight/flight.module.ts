import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightComponent } from './flight.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FlightComponent]
})
export class FlightModule {
}
