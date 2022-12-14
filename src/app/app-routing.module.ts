import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: 'home',
   loadChildren:  () => import('./home/home.module').then(x => x.HomeModule)
  },
   {path: 'usuario',
   loadChildren:  () => import('./usuario/usuario.module').then(x => x.UsuarioModule)
  },
  {path: 'estados',
  loadChildren:  () => import('./estados/estados.module').then(x => x.EstadosModule)
 },
   {path: '', pathMatch: 'full', redirectTo: '/home'},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
