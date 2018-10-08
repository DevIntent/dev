import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {RouterModule} from '@angular/router';
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
