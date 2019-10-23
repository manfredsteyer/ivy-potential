import { Component, Input, OnChanges, ɵmarkDirty } from '@angular/core';
import { ComponentDeps } from '../utils';
import { BAR_COMPONENTS } from '../bar';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html'
})
@ComponentDeps({
  directives: [
    ...BAR_COMPONENTS
  ]
})
export class DashboardTileComponent implements OnChanges {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  // data for chart
  data: any = {};

  more() {
    this.data.a = Math.round(Math.random() * 100);
    this.data.b = Math.round(Math.random() * 100);
    this.data.c = Math.round(Math.random() * 100);
    ɵmarkDirty(this);
  }

  ngOnChanges() {
    if (!this.a && !this.b && !this.c) {
      this.more();
      return;
    }
    this.data = { a: this.a, b: this.b, c: this.c };
    ɵmarkDirty(this);
  }
}

// // Adding compilation context
// const def = getComponentDef(DashboardTileComponent);

// def.directiveDefs = [
//   getDirectiveDef(BarComponent), 
// ];