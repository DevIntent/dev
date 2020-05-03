import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {DevintentModule} from '@devintent/dev';
import {AppComponent} from './app.component';
import {appRoutes} from './app.module';
import {BusinessComponent} from './business/business.component';
import {ButtonBarDemoComponent} from './button-bar-demo/button-bar-demo.component';
import {CoffeeComponent} from './coffee/coffee.component';
import {DemosComponent} from './demos/demos.component';
import {EighthComponent} from './eighth/eighth.component';
import {FifthComponent} from './fifth/fifth.component';
import {FirstComponent} from './first/first.component';
import {FourthComponent} from './fourth/fourth.component';
import {NinthComponent} from './ninth/ninth.component';
import {SecondComponent} from './second/second.component';
import {SeventhComponent} from './seventh/seventh.component';
import {SixthComponent} from './sixth/sixth.component';
import {TenthComponent} from './tenth/tenth.component';
import {ThirdComponent} from './third/third.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DemosComponent,
        ButtonBarDemoComponent,
        FirstComponent,
        SecondComponent,
        ThirdComponent,
        FourthComponent,
        FifthComponent,
        SixthComponent,
        SeventhComponent,
        EighthComponent,
        NinthComponent,
        TenthComponent,
        CoffeeComponent,
        BusinessComponent
      ],
      imports: [
        DevintentModule,
        RouterTestingModule.withRoutes(appRoutes)
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
