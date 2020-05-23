import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DevNavService {
  private _appDrawer: MatDrawer | null = null;
  private _currentUrl = new BehaviorSubject<string>('');
  get currentUrl(): Observable<string> {
    return this._currentUrl.asObservable();
  }

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this._currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav(): Promise<'open' | 'close' | null> {
    if (this._appDrawer) {
      if (!this._appDrawer.disableClose) {
        return this._appDrawer.close();
      } else {
        return Promise.resolve<null>(null);
      }
    } else {
      return Promise.reject<null>('appDrawer has not been set.');
    }
  }

  get appDrawer(): MatDrawer | null {
    return this._appDrawer;
  }

  set appDrawer(value: MatDrawer | null) {
    this._appDrawer = value;
  }
}
