import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ListarBandasComponent } from './listar-bandas/listar-bandas.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BandaDetalheComponent } from './banda-detalhe/banda-detalhe.component';
import { AutenticaRota } from './shared/guards/autentica-rota.guard';

const routes: Routes = [
  { path: 'bandas', component: ListarBandasComponent},
  { path: 'banda/:id', component: BandaDetalheComponent,
    canActivate: [AutenticaRota]
  },
  { path: 'rock/:id', component: CategoriaComponent },
  { path: 'pagode/:id', component: CategoriaComponent },
  { path: 'forro/:id', component: CategoriaComponent },
  { path: '', redirectTo: 'bandas', pathMatch: 'full'},
  { path: '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
