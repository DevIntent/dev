import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FourthComponent} from './fourth.component';

describe('FourthComponent', () => {
  let component: FourthComponent;
  let fixture: ComponentFixture<FourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [FourthComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
