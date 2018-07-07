import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaComponent } from './categoria.component';
import { BandaModule } from './../shared/banda/banda.module';

@NgModule({
  imports: [
    CommonModule,
    BandaModule
  ],
  declarations: [CategoriaComponent],
  exports: [CategoriaComponent]
})
export class CategoriaModule { }
