/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgovorAddComponent } from './ugovor-add.component';

describe('UgovorAddComponent', () => {
  let component: UgovorAddComponent;
  let fixture: ComponentFixture<UgovorAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgovorAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgovorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
