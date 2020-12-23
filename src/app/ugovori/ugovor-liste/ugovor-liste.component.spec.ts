/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UgovorListeComponent } from './ugovor-liste.component';

describe('UgovorListeComponent', () => {
  let component: UgovorListeComponent;
  let fixture: ComponentFixture<UgovorListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UgovorListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UgovorListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
