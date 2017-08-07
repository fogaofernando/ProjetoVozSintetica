/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JanelaNarradorComponent } from './janela-narrador.component';

describe('JanelaNarradorComponent', () => {
  let component: JanelaNarradorComponent;
  let fixture: ComponentFixture<JanelaNarradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JanelaNarradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JanelaNarradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
