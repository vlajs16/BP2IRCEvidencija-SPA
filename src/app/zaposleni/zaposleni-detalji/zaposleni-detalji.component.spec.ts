/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZaposleniDetaljiComponent } from './zaposleni-detalji.component';

describe('ZaposleniDetaljiComponent', () => {
  let component: ZaposleniDetaljiComponent;
  let fixture: ComponentFixture<ZaposleniDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaposleniDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
