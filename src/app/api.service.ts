import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const headers = { 'x-server-origin': 'https://uslands.shop' }

const body = 
  {
    'search_name': '',
    'page': {
      'limit': 12,
      'page': 1
    }
  }
  let body_detail: any;

  const apiUrl_detail = 'https://apiprod.mais.com.br/api/ProductSale/FindDetailsProductStoreById/geisa'

const apiUrl = 'https://apiprod.mais.com.br/api/ProductSale/FindAllProductsByStore/geisa';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }


  GetListProd(): Observable<any> {
    return this.http.post<any>(apiUrl, body, {headers})
  }

  GetListProdDetail(id_product:any) {
    body_detail =
    {
      "subdomain": "geisa",
      "fk_id_product": id_product
    } 
    return this.http.post<any>(apiUrl_detail, body_detail, {headers})
  }
}
