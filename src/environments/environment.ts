// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAXVg1clQAEJWdRiKnXFNEumJXmqn2gHrw',
    authDomain: 'devintent-dev.firebaseapp.com',
    databaseURL: 'https://devintent-dev.firebaseio.com',
    projectId: 'devintent-dev',
    storageBucket: 'devintent-dev.appspot.com',
    messagingSenderId: '583027512098',
    appId: '1:583027512098:web:60c5cf9eb37ef47693cb7b',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
