/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdobrenjeAddComponent } from './odobrenje-add.component';

describe('OdobrenjeAddComponent', () => {
  let component: OdobrenjeAddComponent;
  let fixture: ComponentFixture<OdobrenjeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdobrenjeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdobrenjeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
