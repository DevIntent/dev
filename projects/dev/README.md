# DevIntent Application Development Library

This library is still in the experimental phase.

The goal is to compose lower level Angular Material components into higher level components that
are built with a focus on rapid application development.

## Installation

`npm i @devintent/dev --save`

## Components

### Button Bar

Landscape Tablet<br>
<img alt="button-bar ipad landscape" src="https://user-images.githubusercontent.com/3506071/46653520-45a6bc00-cb74-11e8-9d9c-252ab3314381.png" width="600">

Portrait Phone<br>
<img alt="button-bar iphone portrait" src="https://user-images.githubusercontent.com/3506071/46653521-45a6bc00-cb74-11e8-9406-e9592e7ccf84.png" height="600">

Find the [demo here](https://devintent-dev.firebaseapp.com/button-bar). Resize the screen width to see the responsive
features.

#### Usage

##### Template ([example](https://github.com/DevIntent/dev/blob/master/src/app/button-bar-demo/button-bar-demo.component.html))
```html
<dev-button-bar [navItems]="navItems" class="mat-elevation-z1"></dev-button-bar>
<router-outlet></router-outlet>
```

##### Component ([example](https://github.com/DevIntent/dev/blob/master/src/app/button-bar-demo/button-bar-demo.component.ts))
```ts
import {NavItem} from '@devintent/dev';
...
// Define your array
navItems: NavItem[];
...
// Add labels, route paths, and Material Design icon names.
this.navItems = [
  {label: 'Hot Tub', path: 'first', iconName: 'hot_tub'},
  {label: 'Beach', path: 'second', iconName: 'beach_access'},
  {label: 'Gym', path: 'third', iconName: 'fitness_center'}
];
...
```
Find icon names by searching the [Material Design Icons Tool](https://material.io/tools/icons/).

##### Module
```ts
import {DevintentModule} from '@devintent/dev';
...
imports: [
  DevintentModule
],
```

##### Routing

This component requires that you have appropriate routing set up to match the route paths in the `NavItem` entries.
Here is our [demo routing config](https://github.com/DevIntent/dev/blob/master/src/app/app.module.ts#L26-L44) and
it's [import](https://github.com/DevIntent/dev/blob/master/src/app/app.module.ts#L71).

##### Theming ([example](https://github.com/DevIntent/dev/blob/master/src/styles.scss#L15-L16))

The component themes work with Angular Material [Custom Themes](https://material.angular.io/guide/theming#defining-a-custom-theme)
which are defined in `.scss` files.

```scss
@include angular-material-theme($demo-theme);

// In addition to telling Angular Material about your theme, you also need to let the @devintent/dev
// components know about your theme.
@include dev-theme($demo-theme);
```
