import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListarBandas } from './../shared/interface/listar-bandas.interface';
import { CategoriaService } from './categoria.service';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {

  public bandaCategoria: Array<ListarBandas>;
  public getId: number;

  constructor(
    private categoriaService: CategoriaService,
    private router: ActivatedRoute,
    private route: Router,
  ) {

    this.getId = this.router.snapshot.params['id'];
  }

  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get('id'));
    console.log(this.router.snapshot.params['id']);
    this.carregaCategoria();
  }

  public carregaCategoria(): any {
    this.categoriaService.getCategoria(this.getId).subscribe(
      (categoria) => {
        this.bandaCategoria = categoria;
        if (!this.bandaCategoria.length) {
          this.route.navigate(['/404']);
        }
      });
  }

}
