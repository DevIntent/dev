# DevIntent Application Development Tools

This root project contains a demo app, in [src/](src/), that demonstrates the features of the
[@devintent/dev](projects/dev) application development library.

This repository also includes [@devintent/schematics](projects/schematics) which provide code generation
based upon the modules in the `@devintent/dev` library.

## Development server

Run `npm start` to serve the demo app in a dev server.
Navigate to `http://localhost:4200/`.
The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use
`ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

- Run `npm run build` to build the demo project.
  The build artifacts will be stored in the `dist/dev-demo` directory.
- Run `npm run build:lib` to build the library project.
  The build artifacts will be stored in the `dist/dev` directory.
- Run `npm run build:schematics` to build the schematics project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
