import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {MediaChange, ObservableMedia} from '@angular/flex-layout';
import {NavItem} from '../nav-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'dev-button-bar',
  templateUrl: './button-bar.component.html',
  styleUrls: ['./button-bar.component.scss']
})
export class ButtonBarComponent implements OnInit, OnDestroy {
  @Input() navItems: NavItem[];
  watcher: Subscription;
  namedButtons: NavItem[] = [];
  iconButtons: NavItem[] = [];
  overflowMenuItems: NavItem[] = [];

  constructor(public mediaService: ObservableMedia) {}

  ngOnInit() {
    this.watcher = this.mediaService.subscribe((change: MediaChange) => {
      this.onMediaChange();
    });
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  onMediaChange() {
    const items = this.navItems.slice();
    this.namedButtons = [];
    this.iconButtons = [];
    this.overflowMenuItems = [];

    if (this.mediaService.isActive('xs')) {
      this.iconButtons = this.iconButtons.concat(items.splice(0, 5));
    } else if (this.mediaService.isActive('sm')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 6));
    } else if (this.mediaService.isActive('md')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 8));
    } else if (this.mediaService.isActive('lg')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 12));
    } else if (this.mediaService.isActive('xl')) {
      this.namedButtons = this.namedButtons.concat(items.splice(0, 16));
    }

    if (items.length > 0) {
      this.overflowMenuItems = items;
    }
  }
}
