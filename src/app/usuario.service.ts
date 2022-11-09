import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() {

   }


   public getUsuario(): Usuario{
    let usuario = new Usuario();
    usuario.nome = "Larissa"
    usuario.email = "larissa@example.com"

    return usuario;
   }

   public listaUsuario():Usuario[]{
    return  [
      {
        nome: "Larissa", email: "larissa@gmail.com"
      },
      {
        nome: "Maria", email: "maria@gmail.com"
      },
      {
        nome: "Danilo", email: "danilo@gmail.com"
      }
    ]
   }
}
