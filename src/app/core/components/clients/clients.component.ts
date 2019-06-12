import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { ClientService } from '../../services/client.service';

import { Client } from '../../../shared/models/client';

import { AlertaService } from '../../../shared/components/alerta/alerta.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  sharedKey: string = "";

  constructor(private translate: TranslateService,
    private clientService: ClientService,
    private alertaService: AlertaService,
    private router: Router) { }

  ngOnInit() {
    this.findClients();
  }

  findClients() {
    this.clientService.getClients()
    .subscribe(
    (data) => {
      this.clients = data;
    },
    (error) => { this.alertaService.error('Error loading clients.') }
    );
  }

  new() {
    this.router.navigate(['/new-client']);
  }

  find() {
    this.clientService.getClientBySharedKey(this.sharedKey)
    .subscribe(
    (data) => {
      if(data) {
        this.clients = [] as Client[];
        this.clients.push(data);
      } else {
        this.findClients();
      }
    },
    (error) => { this.alertaService.error('Error loading clients.') }
    );
  }

  download() {
    this.clientService.export()
      .subscribe(
      (data) => {
        if (data) {
          var file = new Blob([data], { type: 'text/csv; charset=utf-8' });
          window.open(window.URL.createObjectURL(file));
        } else {
          this.alertaService.error('Error download.')
        }
      },
      (error) => { this.alertaService.error('Error download.') }
      );
  }

}
