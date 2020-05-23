import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { DevNavService } from './dev-nav.service';
import { NavListItemComponent } from './nav-list-item.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatListModule, MatSidenavModule, RouterModule],
  declarations: [NavListItemComponent],
  providers: [DevNavService],
  exports: [CommonModule, NavListItemComponent, MatIconModule, MatListModule, MatSidenavModule, RouterModule],
})
export class NavListItemModule {}
