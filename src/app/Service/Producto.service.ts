import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../Enviroment/enviroment';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

constructor(private http:HttpClient) { }
  private API: string = enviroment.endPoint;

  public GetAll():Observable<Object>{
    const API_GET_ALL = `${this.API}products`
    return this.http.get(API_GET_ALL);
  }

  public GetById(id: number): Observable<any> {
    const API_BY_ID = `${this.API}products/${id}`;
    return this.http.get(API_BY_ID);
  }

  public Add(product: IProduct): Observable<IProduct> {
    const API_ADD = `${this.API}products`
    const body = JSON.stringify(product)
    return this.http.post<IProduct>(API_ADD, body);
  }
}
