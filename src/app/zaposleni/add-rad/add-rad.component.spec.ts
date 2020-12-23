/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddRadComponent } from './add-rad.component';

describe('AddRadComponent', () => {
  let component: AddRadComponent;
  let fixture: ComponentFixture<AddRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
