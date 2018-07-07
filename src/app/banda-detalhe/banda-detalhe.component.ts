import { ListarBandas } from './../shared/interface/listar-bandas.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BandaDetalheService } from './banda-detalhe.service';
import { Album } from './../shared/interface/albun.interface';


@Component({
  selector: 'app-banda-detalhe',
  templateUrl: './banda-detalhe.component.html',
})
export class BandaDetalheComponent implements OnInit {
  public info: ListarBandas;
  public albuns: Array<Album>;
  public getId: number;

  constructor(
    private bandaDetalheService: BandaDetalheService,
    private router: ActivatedRoute,
  ) {
    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {

    this.carregaInfoBanda();
    this.carregaAlbun();
  }

  public carregaInfoBanda(): any {
    this.bandaDetalheService.getBandaInfo(this.getId).subscribe(
      (info) => {
        this.info = info;
        console.log(this.info);
      });
  }

  public carregaAlbun(): any {
    this.bandaDetalheService.getAlbuns(this.getId).subscribe(
      (album) => {
        this.albuns = album;
        console.log(this.albuns );
      });
  }

}
