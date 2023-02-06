import { Component } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { ConversorService } from '../conversor.service';
import { Moeda } from '../moeda';
import {MatTableModule} from '@angular/material/table'; 

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent {

  moedas: Moeda[] = []

  colunas = ['code','descricao']
 
  private readonly API = 'https://api.exchangerate.host/symbols'

  constructor(private service: ConversorService) {}
  
  listar() {
    this.service.listar()
  }
}
