import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarBandas } from './../shared/interface/listar-bandas.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient,
  ) { }

  public getCategoria(id): Observable<ListarBandas[]> {
    const url =  `https://my-json-server.typicode.com/neliofrazao/angularDb/bands/?category=${id}`;
    return this.http.get<ListarBandas[]>(url, {withCredentials: true, responseType: 'json' });

  }
}
