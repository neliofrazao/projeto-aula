import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListarBandas } from '../shared/interface/listar-bandas.interface';

@Injectable({
  providedIn: 'root'
})
export class ListarBandasService {

  constructor(
    private http: HttpClient
  ) {}

  public carregaBanda(): Observable<ListarBandas[]> {
    const url = 'https://my-json-server.typicode.com/neliofrazao/angularDb/bands';

    return this.http.get<ListarBandas[]>(url,
      { withCredentials: true, responseType: 'json' }
    );
  }


}
