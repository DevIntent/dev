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

#### Button Bar Template ([example](https://github.com/DevIntent/dev/blob/master/src/app/button-bar-demo/button-bar-demo.component.html))
```html
<dev-button-bar [navItems]="navItems" class="mat-elevation-z1"></dev-button-bar>
<router-outlet></router-outlet>
```

#### Button Bar Component ([example](https://github.com/DevIntent/dev/blob/master/src/app/button-bar-demo/button-bar-demo.component.ts))
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

#### Button Bar Module
```ts
import {DevintentModule} from '@devintent/dev';
...
imports: [
  DevintentModule
],
```

#### Button Bar Routing

This component requires that you have appropriate routing set up to match the route paths in the `NavItem` entries.
Here is our [demo routing config](https://github.com/DevIntent/dev/blob/master/src/app/app.module.ts#L26-L44) and
it's [import](https://github.com/DevIntent/dev/blob/master/src/app/app.module.ts#L71).

#### Button Bar Theming ([example](https://github.com/DevIntent/dev/blob/master/src/styles.scss#L15-L16))

The component themes work with Angular Material [Custom Themes](https://material.angular.io/guide/theming#defining-a-custom-theme)
which are defined in `.scss` files.

You should define your theme in a [SASS Partial](https://sass-lang.com/guide). For example, `_theme.scss`:
```scss
// Custom Theming for Angular Material
// For more information: https://material.angular.io/guide/theming
@import '~@angular/material/theming';

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/
$demo-primary: mat-palette($mat-indigo);
$demo-accent: mat-palette($mat-green, A200, A100, A400);

// The warn palette is optional (defaults to red).
$demo-warn: mat-palette($mat-red);

// Create the theme object (a Sass map containing all of the palettes).
$demo-theme: mat-light-theme($demo-primary, $demo-accent, $demo-warn);

$demo-typography: mat-typography-config(
  //$font-family: 'Roboto, monospace',
  //$headline: mat-typography-level(32px, 48px, 700),
  //$body-1: mat-typography-level(16px, 24px, 500)
);
```

Then your primary SCSS entrypoint should import this theme file and pass the theme into both the Angular Material
and DevIntent Dev components.
```scss
@import "theme";
@import '~@devintent/dev/theming';

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat-core($demo-typography);

// Include theme styles for core and each component used in your app.
@include angular-material-theme($demo-theme);

// In addition to telling Angular Material about your theme, you also need to let the @devintent/dev
// components know about your theme.
@include dev-theme($demo-theme);
```
Note: Custom typography is not yet implemented for these components, but you can use it with Angular Material components.
See more in their [Typography Guide](https://material.angular.io/guide/typography). 
