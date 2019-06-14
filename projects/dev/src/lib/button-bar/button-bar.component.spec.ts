import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterTestingModule} from '@angular/router/testing';

import {ButtonBarComponent} from './button-bar.component';

describe('ButtonBarComponent', () => {
  let component: ButtonBarComponent;
  let fixture: ComponentFixture<ButtonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonBarComponent
      ],
      imports: [
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatToolbarModule,
        MatTooltipModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
