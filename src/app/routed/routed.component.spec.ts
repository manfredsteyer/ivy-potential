/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RoutedComicComponent } from './routed.component';

describe('RoutedComicComponent', () => {
  let component: RoutedComicComponent;
  let fixture: ComponentFixture<RoutedComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutedComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutedComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
