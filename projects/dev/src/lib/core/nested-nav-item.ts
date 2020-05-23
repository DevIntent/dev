import { NavItem } from './nav-item';

export interface NestedNavItem extends NavItem {
  children: NestedNavItem[];
}
