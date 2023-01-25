import { Component } from '@angular/core';
import { ConversorService } from '../conversor.service';

@Component({
  selector: 'app-lista-moedas',
  templateUrl: './lista-moedas.component.html',
  styleUrls: ['./lista-moedas.component.css']
})
export class ListaMoedasComponent {

  constructor(private service: ConversorService) {}

}
