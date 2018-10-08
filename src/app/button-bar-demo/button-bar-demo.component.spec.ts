import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonBarDemoComponent} from './button-bar-demo.component';

describe('ButtonBarDemoComponent', () => {
  let component: ButtonBarDemoComponent;
  let fixture: ComponentFixture<ButtonBarDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ButtonBarDemoComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
