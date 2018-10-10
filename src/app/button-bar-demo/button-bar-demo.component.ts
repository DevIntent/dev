import {Component, OnInit} from '@angular/core';
import {NavItem} from '@devintent/dev';

@Component({
  selector: 'dev-button-bar-demo',
  templateUrl: './button-bar-demo.component.html',
  styleUrls: ['./button-bar-demo.component.scss']
})
export class ButtonBarDemoComponent implements OnInit {
  navItems: NavItem[];

  constructor() {
    this.navItems = [
      {label: 'Hot Tub', path: 'first', iconName: 'hot_tub'},
      {label: 'Beach', path: 'second', iconName: 'beach_access'},
      {label: 'Gym', path: 'third', iconName: 'fitness_center'},
      {label: 'Children', path: 'fourth', iconName: 'child_friendly'},
      {label: 'Child Care', path: 'fifth', iconName: 'child_care'},
      {label: 'Golf', path: 'sixth', iconName: 'golf_course'},
      {label: 'Spa', path: 'seventh', iconName: 'spa'},
      {label: 'Pool', path: 'eighth', iconName: 'pool'},
      {label: 'Service', path: 'ninth', iconName: 'room_service'},
      {label: 'Casino', path: 'tenth', iconName: 'casino'},
      {label: 'Business', path: 'business', iconName: 'business_center'},
      {label: 'Coffee', path: 'coffee', iconName: 'free_breakfast'}
    ];
  }

  ngOnInit() {
  }
}
