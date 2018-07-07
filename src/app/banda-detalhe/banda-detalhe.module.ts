import { RouterModule } from '@angular/router';
import { BandaDetalheService } from './banda-detalhe.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandaDetalheComponent } from './banda-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BandaDetalheComponent
  ],
  exports: [BandaDetalheComponent],
  providers: [BandaDetalheService]
})
export class BandaDetalheModule { }
