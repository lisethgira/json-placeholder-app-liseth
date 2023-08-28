import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'posts', loadChildren: () => import('./publicaciones/publicaciones.module').then(m => m.PublicacionesModule) },
  { path: 'users', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'todos', loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule) },
  { path: 'comments', loadChildren: () => import('./comentarios/comentarios.module').then(m => m.ComentariosModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
