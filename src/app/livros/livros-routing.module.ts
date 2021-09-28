import { Routes } from "@angular/router";
import { ListarLivrosComponent } from "./listar";

export const LivroRoutes: Routes = [
    {
        path:'livros',
        redirectTo: 'livros/listar'
    },
    {
        path:'livros/listar',
        component: ListarLivrosComponent
    }
];