import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardTileComponent } from './dashboard-tile.component';

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
  ]
})
export class DashboardTileModule {
}
