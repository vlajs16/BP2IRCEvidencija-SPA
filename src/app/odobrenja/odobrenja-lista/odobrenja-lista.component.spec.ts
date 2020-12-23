/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdobrenjaListaComponent } from './odobrenja-lista.component';

describe('OdobrenjaListaComponent', () => {
  let component: OdobrenjaListaComponent;
  let fixture: ComponentFixture<OdobrenjaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdobrenjaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdobrenjaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
