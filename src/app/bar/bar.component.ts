import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  @Input() value: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
