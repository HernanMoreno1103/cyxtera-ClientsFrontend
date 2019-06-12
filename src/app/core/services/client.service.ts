import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { environment } from '../../../environments/environment';

import { Client } from '../../shared/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  api: string;

  constructor(private httpClient: HttpClient) {
    this.api = environment.api;
  }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.api + 'findAll');
  }

  getClientById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(this.api + 'findById/${id}');
  }

  getClientBySharedKey(sharedKey: string): Observable<Client> {
    //const options = { params: new HttpParams().set('q', sharedKey) };
    return this.httpClient.get<Client>(this.api + 'find?q=' + sharedKey);
  }

  createClient(client: Client): Observable<string> {
    return this.httpClient.post<string>(this.api + 'create', client);
  }

  deleteClient(id: number): Observable<string> {
    return this.httpClient.delete<string>(this.api + 'delete/${id}');
  }

  export(): Observable<Blob> {
    return this.httpClient.get<Blob>(this.api + 'export', { responseType: 'blob' as 'json' });
  }

}
