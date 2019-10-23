
import { enableProdMode  } from '@angular/core';
import { environment } from './environments/environment';
import { FlightInfoElement } from './flight/flight.element';

if (environment.production) {
  enableProdMode();
}

customElements.define('flight-info', FlightInfoElement);