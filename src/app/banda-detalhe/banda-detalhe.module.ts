import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BandaDetalheComponent } from './banda-detalhe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BandaDetalheComponent
  ],
  exports: [BandaDetalheComponent]
})
export class BandaDetalheModule { }
