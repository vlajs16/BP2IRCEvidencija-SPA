/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PredloziListaComponent } from './predlozi-lista.component';

describe('PredloziListaComponent', () => {
  let component: PredloziListaComponent;
  let fixture: ComponentFixture<PredloziListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredloziListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredloziListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
