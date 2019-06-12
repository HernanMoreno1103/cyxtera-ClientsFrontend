import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientService } from './services/client.service';

import { SharedModule } from '../shared/shared.module';

import { AppRoutingModule } from '../app-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { MenuComponent } from './components/menu/menu.component';
import { ClientNewComponent } from './components/client-new/client-new.component';

@NgModule({
  declarations: [
    ClientsComponent,
    MenuComponent,
    ClientNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
      ClientService
  ],
})
export class CoreModule { }
