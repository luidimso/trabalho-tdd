import { Component } from '@angular/core';
import { ITrabalhador, motivoAfastamento } from './trabalhador.interface';
import { trabalhadores } from './trabalhadores.db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private todosTrabalhadores = trabalhadores;

  constructor(){}

  getTrabalhadoresAfastadosPorDoenca(): ITrabalhador[] {
    return this.todosTrabalhadores.filter((trabalhador) => {
      return trabalhador.motivoAfastamento == motivoAfastamento.POR_DOENCA;
    });
  }

  getTotalDeTrabalhadores(): number {
    return this.todosTrabalhadores.length;
  }

  getTotalDeTrabalhadoresDisponiveis(): number {
    return this.todosTrabalhadores.filter((trabalhador) => {
      return trabalhador.motivoAfastamento != motivoAfastamento.POR_DOENCA;
    }).length;
  }
}
