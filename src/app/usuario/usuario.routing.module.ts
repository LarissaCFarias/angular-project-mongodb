import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';

const routes: Routes = [
  // {path: 'home',
  //  loadChildren:  () => import('./home/home.module').then(x => x.HomeModule)
  // },
  //  {path: 'usuario',
  //  loadChildren:  () => import('./usuario/usuario.module').then(x => x.UsuarioModule)
  // },
   {path: '', component:UsuarioComponent},
   {path: 'add', component:UsuarioCadastroComponent},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UsuarioRoutingModule { }
