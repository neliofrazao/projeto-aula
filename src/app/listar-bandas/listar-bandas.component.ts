import { Component, OnInit } from '@angular/core';
import { ListarBandasService } from './listar-bandas.service';

import { ListarBandas } from './../shared/interface/listar-bandas.interface';

@Component({
  selector: 'app-listar-bandas',
  templateUrl: './listar-bandas.component.html',

})
export class ListarBandasComponent implements OnInit {

  public listarBandas: Array<ListarBandas>;
  constructor(
    private listarBandasService: ListarBandasService,
  ) { }

  ngOnInit() {
    this.carregaBandas();
  }

  public carregaBandas(): any {
    this.listarBandasService.carregaBanda().subscribe(
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
