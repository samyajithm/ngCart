import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {RouterOutlet} from "@angular/router";
import {fadeAnimation} from "./animations/fade.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  browserLangs: any = [];
  ngCartAppLangs: any = ['en'];

  constructor(private translate: TranslateService) {
    this.setDefaultLang();
  }

  // Localization support
  setDefaultLang() {
    this.browserLangs = navigator.languages || ['en'];
    for (const lang of this.browserLangs) {
      if (this.ngCartAppLangs.indexOf(lang) !== -1) {
        this.translate.setDefaultLang(lang);
        break;
      }
    }
  }

  getRouterOutletState(outlet: RouterOutlet) {
    return outlet && outlet.isActivated ? outlet.activatedRoute : '';
  }
}
