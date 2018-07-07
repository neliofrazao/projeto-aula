import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarBandasComponent } from './listar-bandas/listar-bandas.component';

const routes: Routes = [
  { path: 'bandas', component: ListarBandasComponent },
  { path: '', redirectTo: 'bandas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
