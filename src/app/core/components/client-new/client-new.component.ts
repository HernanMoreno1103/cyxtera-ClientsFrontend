import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Data } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

import { TranslateService } from '@ngx-translate/core';

import { ClientService } from '../../services/client.service';

import { Client } from '../../../shared/models/client';

import { AlertaService } from '../../../shared/components/alerta/alerta.service';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html'
})
export class ClientNewComponent implements OnInit {
  @ViewChild('f', { static: true }) form: NgForm;
  formEnviado: boolean;
  client: Client;

  constructor(private translate: TranslateService,
    private clientService: ClientService,
    private alertaService: AlertaService,
    private router: Router) { }

  ngOnInit() {
    this.client = new Client(null, '', '', '', '', '', '');
  }

  create() {
    this.formEnviado = true;

    if (this.form.valid) {
      this.clientService.createClient(this.client)
      .subscribe(
      (data) => {
        if (data) {
          this.alertaService.success(data);

          this.router.navigate(['/clients']);
        }
      },
      (error) => { this.alertaService.error('Error new client.') }
      );
    }
  }

}
