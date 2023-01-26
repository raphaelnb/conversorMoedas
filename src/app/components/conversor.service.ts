import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Moeda } from './moeda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
 
  private readonly API = 'https://api.exchangerate.host/symbols'
  
  private moedas = Object.values(this.API)
  
  constructor(private http: HttpClient) { }

  listar(): Observable<Moeda[]> {
    return this.http.get<Moeda[]>(this.API);
  }
  teste() {
    console.log(Object.entries(this.API))
  }
}
