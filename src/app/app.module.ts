import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ButtonBarModule } from '@devintent/dev';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { ButtonBarDemoComponent } from './button-bar-demo/button-bar-demo.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { DemosComponent } from './demos/demos.component';
import { EighthComponent } from './eighth/eighth.component';
import { FifthComponent } from './fifth/fifth.component';
import { FirstComponent } from './first/first.component';
import { FourthComponent } from './fourth/fourth.component';
import { NinthComponent } from './ninth/ninth.component';
import { SecondComponent } from './second/second.component';
import { SeventhComponent } from './seventh/seventh.component';
import { SixthComponent } from './sixth/sixth.component';
import { TenthComponent } from './tenth/tenth.component';
import { ThirdComponent } from './third/third.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: DemosComponent, children: [] },
  {
    path: 'button-bar',
    component: ButtonBarDemoComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'first' },
      { path: 'first', component: FirstComponent, children: [] },
      { path: 'second', component: SecondComponent, children: [] },
      { path: 'third', component: ThirdComponent, children: [] },
      { path: 'fourth', component: FourthComponent, children: [] },
      { path: 'fifth', component: FifthComponent, children: [] },
      { path: 'sixth', component: SixthComponent, children: [] },
      { path: 'seventh', component: SeventhComponent, children: [] },
      { path: 'eighth', component: EighthComponent, children: [] },
      { path: 'ninth', component: NinthComponent, children: [] },
      { path: 'tenth', component: TenthComponent, children: [] },
      { path: 'business', component: BusinessComponent, children: [] },
      { path: 'coffee', component: CoffeeComponent, children: [] },
    ],
  },
  { path: '**', component: DemosComponent, children: [] },
];

@NgModule({
  declarations: [
    AppComponent,
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
    BusinessComponent,
    CoffeeComponent,
    ButtonBarDemoComponent,
    DemosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ButtonBarModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirePerformanceModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
