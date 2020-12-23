/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PredlogAddComponent } from './predlog-add.component';

describe('PredlogAddComponent', () => {
  let component: PredlogAddComponent;
  let fixture: ComponentFixture<PredlogAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredlogAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredlogAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
