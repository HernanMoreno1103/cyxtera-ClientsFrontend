import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina-error',
  template: `<div class="panel panel-primary main">
                <div class="panel-body component">
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-sm-12 col-centered image">
                        <img src="assets/images/noautorizado.png" alt="no autorizado" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12 col-md-12 col-sm-12 ">
                        <p class="col-centered">
                          {{ 'ERROR.MESSAGE' | translate }}
                        </p>
                      </div>
                      <div class="form-group  col-sm-12 col-centered">
                        <span>{{ 'ERROR.DETAIL_MESSAGE' | translate }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`,
  styles: [`.main  { margin-top: 15px; }
            .component { padding-bottom: 180px; }
            .col-centered { justify-content: center; display: flex; align-items: center; }
            .image { padding-top: 100px; padding-bottom: 40px; }
            p { font-size: 36px; font-weight: 900; }
            img { width: 150px; } `]
})
export class PaginaErrorComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
