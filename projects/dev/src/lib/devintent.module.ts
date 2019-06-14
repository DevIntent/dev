import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

import {ButtonBarComponent} from './button-bar/button-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
    ButtonBarComponent
  ],
  exports: [
    ButtonBarComponent,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    FlexLayoutModule
  ]
})
export class DevintentModule {
}
