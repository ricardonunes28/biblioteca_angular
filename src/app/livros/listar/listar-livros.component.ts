import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  livros: Livro [];

  constructor(private livroService : LivroService) { }

  ngOnInit(){
    this.livros = this.listarLivros()
    this.livros = [
      new Livro(1, "Crepusculo", "João", "abril"),
      new Livro(2, "Pai rico e pai pobre", "Ricardo", "abril")
    ]
  }
  listarLivros(): Livro []{
    return this.livroService.listarLivros()
  }
}
