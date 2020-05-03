import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhComponent } from './seventh.component';

describe('SeventhComponent', () => {
  let component: SeventhComponent;
  let fixture: ComponentFixture<SeventhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeventhComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
