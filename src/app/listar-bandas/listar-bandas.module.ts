import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ListarBandasComponent } from './listar-bandas.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ ListarBandasComponent],
  exports: [ListarBandasComponent]
})
export class ListarBandasModule { }
