import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {DevComponent} from '../../projects/dev/src/lib/dev.component';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DevComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
