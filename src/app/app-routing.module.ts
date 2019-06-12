import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientsComponent } from './core/components/clients/clients.component';
import { ClientNewComponent } from './core/components/client-new/client-new.component';

import { PaginaErrorComponent } from './shared/components/pagina-error/pagina-error.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientsComponent },
  { path: 'new-client', component: ClientNewComponent },
  { path: 'page-error', component: PaginaErrorComponent },
  { path: '**', redirectTo: '/page-error' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
