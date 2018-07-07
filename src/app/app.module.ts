import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarBandasModule } from './listar-bandas/listar-bandas.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListarBandasModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
