import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { PaginaErrorComponent } from './components/pagina-error/pagina-error.component';
import { AlertaComponent } from './components/alerta/alerta.component';

import { AlertaService } from './components/alerta/alerta.service';

@NgModule({
  declarations: [
    PaginaErrorComponent,
    AlertaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    PaginaErrorComponent,
    AlertaComponent
  ],
  providers: [
    AlertaService
  ],
})
export class SharedModule { }
