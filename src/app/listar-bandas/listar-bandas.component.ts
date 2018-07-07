import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListarBandasService } from './listar-bandas.service';

import { ListarBandas } from './../shared/interface/listar-bandas.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-bandas',
  templateUrl: './listar-bandas.component.html',

})
export class ListarBandasComponent implements OnInit, OnDestroy  {

  public listarBandas: Array<ListarBandas>;
  public subscription: Subscription;

  constructor(
    private listarBandasService: ListarBandasService,
  ) { }

  ngOnInit() {
    this.carregaBandas();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public carregaBandas(): any {
    this.subscription = this.listarBandasService.carregaBanda().subscribe(
      (banda) => {
        this.listarBandas = banda;
        console.log(this.listarBandas);
      }
    );


   /*setTimeout(() => {
      this.listarBandasService.carregaBanda().subscribe(
        banda => this.listarBandas = banda
      );
    }, 2000);*/

  }

}
