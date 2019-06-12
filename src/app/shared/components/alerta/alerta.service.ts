import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Alerta, TipoAlerta } from './alerta';

@Injectable()
export class AlertaService {

  subject = new Subject<Alerta>();

  constructor() { }

  success(mensaje: string) {
    this.alerta(TipoAlerta.Success, mensaje, true);
  }

  success_noclose(mensaje: string) {
    this.alerta(TipoAlerta.Success, mensaje, false);
  }

  error(mensaje: string) {
    this.alerta(TipoAlerta.Error, mensaje, true);
  }

  error_noclose(mensaje: string) {
    this.alerta(TipoAlerta.Error, mensaje, false);
  }

  info(mensaje: string) {
    this.alerta(TipoAlerta.Info, mensaje, true);
  }

  info_noclose(mensaje: string) {
    this.alerta(TipoAlerta.Info, mensaje, false);
  }

  warning(mensaje: string) {
    this.alerta(TipoAlerta.Warning, mensaje, true);
  }

  warning_noclose(mensaje: string) {
    this.alerta(TipoAlerta.Warning, mensaje, false);
  }

  alerta(tipo: TipoAlerta, mensaje: string, cerrar: boolean) {
    this.subject.next(<Alerta>{ tipo: tipo, mensaje: mensaje, cerrar: cerrar });
  }

  getAlerta(): Observable<any> {
    return this.subject.asObservable();
  }

  clear() {
    this.subject.next();
  }

}
