import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListItemDemoComponent } from './nav-list-item-demo.component';

describe('NavListItemDemoComponent', () => {
  let component: NavListItemDemoComponent;
  let fixture: ComponentFixture<NavListItemDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavListItemDemoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavListItemDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
