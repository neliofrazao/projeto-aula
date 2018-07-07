import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BandaComponent } from './banda.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    BandaComponent
  ],
  exports: [BandaComponent]
})
export class BandaModule { }
