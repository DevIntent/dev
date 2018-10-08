import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FifthComponent} from './fifth.component';

describe('FifthComponent', () => {
  let component: FifthComponent;
  let fixture: ComponentFixture<FifthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [FifthComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
