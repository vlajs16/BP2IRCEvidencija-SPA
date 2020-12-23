/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditRadComponent } from './edit-rad.component';

describe('EditRadComponent', () => {
  let component: EditRadComponent;
  let fixture: ComponentFixture<EditRadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
