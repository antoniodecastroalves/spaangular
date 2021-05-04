import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Antonio', idade: 39, email: 'antoniodecastroalves@gmail.com', curso: 'Sistemas da informacao' },
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Fabio', idade: 25, email: 'fabio@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Gariela', idade: 31, email: 'gabriela@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Alberto', idade: 45, email: 'alberrg@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
