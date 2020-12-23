/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListaZaposlenihComponent } from './lista-zaposlenih.component';

describe('ListaZaposlenihComponent', () => {
  let component: ListaZaposlenihComponent;
  let fixture: ComponentFixture<ListaZaposlenihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaZaposlenihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaZaposlenihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
