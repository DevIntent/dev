import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthComponent } from './sixth.component';

describe('SixthComponent', () => {
  let component: SixthComponent;
  let fixture: ComponentFixture<SixthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SixthComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
