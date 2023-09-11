import { Component } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Usuarios } from '../interfaces/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  usuarios: Usuarios[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.usuariosService.traerUsuarios().subscribe((res: any) => {
      this.usuarios = res;
    });
  }

  getRandomGender() {
    const genders = ["male", "female"];
    const randomIndex = Math.floor(Math.random() * genders.length);
    return genders[randomIndex];
  }
}
