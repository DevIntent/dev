import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
