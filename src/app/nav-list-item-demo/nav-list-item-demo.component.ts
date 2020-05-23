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
      children: [
        {
          label: 'First',
          iconName: 'book',
          path: 'nav-list-item/chapters/fourth',
          children: [],
        },
        {
          label: 'Second',
          iconName: 'bookmark',
          path: 'nav-list-item/chapters/fifth',
          children: [],
        },
        {
          label: 'Third',
          iconName: 'bookmark_border',
          path: 'nav-list-item/chapters/sixth',
          children: [],
        },
      ],
    },
  ];

  constructor(private devNavService: DevNavService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.devNavService.appDrawer = this.appDrawer;
  }
}
