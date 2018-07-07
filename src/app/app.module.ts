import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarBandasModule } from './listar-bandas/listar-bandas.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BandaDetalheComponent } from './banda-detalhe/banda-detalhe.component';


@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
    BandaDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ListarBandasModule,
    CategoriaModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
