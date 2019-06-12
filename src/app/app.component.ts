import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'clients';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
  
}
