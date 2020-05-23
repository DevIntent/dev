import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DevNavService, NestedNavItem } from '@devintent/dev';

@Component({
  selector: 'dev-nav-list-item-demo',
  templateUrl: './nav-list-item-demo.component.html',
  styleUrls: ['./nav-list-item-demo.component.scss'],
})
export class NavListItemDemoComponent implements OnInit, AfterViewInit {
  @ViewChild('appDrawer') appDrawer: MatDrawer | null = null;
  navItems: NestedNavItem[] = [
    {
      label: 'Sections',
      iconName: 'collections_bookmark',
      path: 'nav-list-item/sections',
      children: [
        {
          label: 'First',
          iconName: 'photo_album',
          path: 'nav-list-item/sections/first',
          children: [],
        },
        {
          label: 'Second',
          iconName: 'style',
          path: 'nav-list-item/sections/second',
          children: [],
        },
        {
          label: 'Third',
          iconName: 'image',
          path: 'nav-list-item/sections/third',
          children: [],
        },
      ],
    },
    {
      label: 'Chapters',
      iconName: 'bookmarks',
      path: 'nav-list-item/chapters',
      children: [
        {
          label: 'Fourth',
          iconName: 'book',
          path: 'nav-list-item/chapters/fourth',
          children: [],
        },
        {
          label: 'Fifth',
          iconName: 'bookmark',
          path: 'nav-list-item/chapters/fifth',
          children: [],
        },
        {
          label: 'Sixth',
          iconName: 'bookmark_border',
          path: 'nav-list-item/chapters/sixth',
          children: [],
        },
      ],
    },
    {
      label: 'Feedback',
      iconName: 'feedback',
      path: 'nav-list-item/feedback',
      children: [],
    },
  ];

  constructor(private devNavService: DevNavService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.devNavService.appDrawer = this.appDrawer;
  }
}
