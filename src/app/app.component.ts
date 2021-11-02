import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  scriptLoaded: boolean = false;

  ngOnInit() {
    if (localStorage.getItem('gm_api_key')) {
      if (new Date(localStorage.getItem('gm_api_key_expires_in') as string).getTime() < new Date().getTime()) {
        localStorage.removeItem('gm_api_key');
        localStorage.removeItem('gm_api_key_expires_in');
      } else {
        this.loadScript(
          `https://maps.googleapis.com/maps/api/js?libraries=places&key=${localStorage.getItem('gm_api_key')}`
        ).then(() => {
          this.scriptLoaded = true;
        });
      }
    }
  }

  handleApiKey(key: string) {
    this.loadScript(`https://maps.googleapis.com/maps/api/js?libraries=places&key=${key}`).then(() => {
      localStorage.setItem('gm_api_key', key);
      localStorage.setItem(
        'gm_api_key_expires_in',
        new Date(new Date().setDate(new Date().getDate() + 7)).toISOString()
      );
      this.scriptLoaded = true;
    });
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
}
