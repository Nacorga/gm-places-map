import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  loading: boolean = true;
  scriptLoaded: boolean = false;
  window: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private ngZone: NgZone
  ) {
    this.window = this.document.defaultView;
  }

  ngOnInit() {
    this.catchGmAuthFailure();
    this.checkGmApiKey();
  }

  async handleApiKey(key: string) {
    this.loading = true;
    await this.loadScript(this.getScript(key));
    const oneWeekAfter = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
    localStorage.setItem('gm_api_key', key);
    localStorage.setItem('gm_api_key_expires_in', oneWeekAfter);
    this.scriptLoaded = true;
    this.loading = false;
    this.cdr.detectChanges();
  }

  private catchGmAuthFailure() {
    this.window.gm_authFailure = () => {
      this.ngZone.run(() => {
        this.scriptLoaded = false;
        this.cdr.detectChanges();
        localStorage.removeItem('gm_api_key');
        localStorage.removeItem('gm_api_key_expires_in');
        this.openSnackBar();
      });
    };
  }

  private async checkGmApiKey() {
    if (localStorage.getItem('gm_api_key')) {
      if (new Date(localStorage.getItem('gm_api_key_expires_in') as string).getTime() < new Date().getTime()) {
        localStorage.removeItem('gm_api_key');
        localStorage.removeItem('gm_api_key_expires_in');
      } else {
        await this.loadScript(this.getScript(localStorage.getItem('gm_api_key') as string));
        this.scriptLoaded = true;
      }
    }
    this.loading = false;
    this.cdr.detectChanges();
  }

  private getScript(key: string) {
    return `https://maps.googleapis.com/maps/api/js?libraries=places&key=${key}`;
  }

  private loadScript(name: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = name;
      document.getElementsByTagName('head')[0].appendChild(script);
      script.onload = () => {
        resolve(true);
      };
    });
  }

  openSnackBar() {
    this.snackBar.open('Google maps failed to load!', undefined, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
