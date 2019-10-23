import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardTileComponent,
    // BarComponent
  ],
  exports: [
    DashboardTileComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardTileModule { 
}
