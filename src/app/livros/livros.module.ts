import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared';
import { ListarLivrosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarLivrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    LivroService
  ]
})
export class LivrosModule { }
