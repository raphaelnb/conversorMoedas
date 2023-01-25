import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  API = 'https://api.exchangerate.host/symbols'

  constructor() { }
}
