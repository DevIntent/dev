import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NestedNavItem } from '..';
import { DevNavService } from './dev-nav.service';

@Component({
  selector: 'dev-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
    ]),
  ],
})
export class NavListItemComponent implements OnInit, OnDestroy {
  expanded = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NestedNavItem | undefined;
  @Input() depth = 0;
  private destroyed = new Subject();

  constructor(public navExpansionService: DevNavService, public router: Router) {}

  ngOnInit() {
    this.navExpansionService.currentUrl.pipe(takeUntil(this.destroyed)).subscribe((url: string) => {
      if (this.item && this.item.path && url) {
        this.expanded = url.indexOf(`/${this.item.path}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onItemSelected(item: NestedNavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.path]);
      this.navExpansionService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
