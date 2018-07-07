import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ListarBandas } from './../shared/interface/listar-bandas.interface';
import { Album } from './../shared/interface/albun.interface';

@Injectable({
  providedIn: 'root'
})
export class BandaDetalheService {

  constructor(
    private http: HttpClient
  ) { }

  public getBandaInfo(id: number): Observable<ListarBandas> {
    const url = `https://my-json-server.typicode.com/neliofrazao/angularDb/bands/${id}`;
    return this.http.get<ListarBandas>(url,
      {withCredentials: true, responseType: 'json'}
    );
  }

  public getAlbuns(id: number): Observable<Album[]> {
    const url = `https://my-json-server.typicode.com/neliofrazao/angularDb/albums/?bandId=${id}`;
    return this.http.get<Album[]>(url, { withCredentials: true, responseType: 'json'});

  }
}
