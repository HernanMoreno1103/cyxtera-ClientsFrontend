import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AlertaService } from './alerta.service';
import { Alerta, TipoAlerta } from './alerta';

declare var $: any;

@Component({
  selector: 'alerta',
  template: `<div *ngIf="!isEmpty(alerta)" class="panel-body">
                <div class=" {{ getCss(alerta) }}">
                  <a class="close" (click)="removeAlerta(alerta)">&times;</a>
                  <strong class="titulo">{{getTittle(alerta)}}</strong> <br><br> <span [innerHTML]="alerta.mensaje"></span>
                </div>
            </div>`,
  styles: [`.panel-body {padding: 15px 15px 0px 15px;}
            .alert {padding: 15px; margin-bottom: 0px; border: 1px solid transparent; border-radius: 4px;}
            .alert-border {border-color: #BDBDBD}
            .titulo {font-size: 21px; }`]
})
export class AlertaComponent implements OnInit, OnDestroy {
  alerta: Alerta;
  subscription: Subscription;

  constructor(private alertaService: AlertaService) {
    this.subscription = this.alertaService.getAlerta().subscribe(
      (alerta: Alerta) => {
        if (!alerta) {
          this.alerta = {} as Alerta;
          return;
        }

        this.alerta = alerta;

        window.scroll(0, 0);

        if (this.alerta.cerrar) {
          setTimeout(() => this.removeAlerta(), 12000);
        }
      });
  }

  ngOnInit() {
  }

  removeAlerta() {
    this.alertaService.clear();
  }

  getTittle(alerta: Alerta) {
    if (!alerta) {
      return;
    }

    switch (alerta.tipo) {
      case TipoAlerta.Success:
        return 'Success!';
      case TipoAlerta.Error:
        return 'Error!';
      case TipoAlerta.Info:
        return 'Info!';
      case TipoAlerta.Warning:
        return 'Warning!';
    }
  }

  getCss(alerta: Alerta) {
    if (!alerta) {
      return;
    }

    switch (alerta.tipo) {
      case TipoAlerta.Success:
        return 'alert alert-success alert-border fade in';
      case TipoAlerta.Error:
        return 'alert alert-danger alert-border fade in';
      case TipoAlerta.Info:
        return 'alert alert-info alert-border fade in';
      case TipoAlerta.Warning:
        return 'alert alert-warning alert-border fade in';
    }
  }

  public isEmpty(alerta): boolean {
    if (!alerta) {
      this.alerta = {} as Alerta;
    }
    return (this.alerta && (Object.keys(this.alerta).length === 0));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
