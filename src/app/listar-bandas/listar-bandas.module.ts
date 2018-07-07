import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListarBandasComponent } from './listar-bandas.component';
import { BandaModule } from '../shared/banda/banda.module';

@NgModule({
  imports: [
    CommonModule,
    BandaModule,
    HttpClientModule
  ],
  declarations: [ ListarBandasComponent],
  exports: [ListarBandasComponent]
})
export class ListarBandasModule { }
