import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarBandasModule } from './listar-bandas/listar-bandas.module';
import { CategoriaModule } from './categoria/categoria.module';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';


@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent
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
