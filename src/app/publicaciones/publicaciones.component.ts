import { Component } from '@angular/core';
import { PublicacionesService } from '../services/publicaciones.service';
import { Publicaciones } from '../interfaces/publicaciones';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {
  publicaciones: Publicaciones[] = [];
  paginaActual: number = 1;
  publicacionesPorPagina: number = 4;
  paginasPorGrupo: number = 5; // Cantidad de páginas por grupo
  grupoActual: number = 1; // Grupo de páginas actual

  constructor(private publicacionesService: PublicacionesService) {}

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones(): void {
    this.publicacionesService.traerPublicaciones().subscribe((res: any) => {
      this.publicaciones = res;
    });
  }

  cambiarPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      const paginaEnGrupo = Math.ceil(pagina / this.paginasPorGrupo);
      if (paginaEnGrupo !== this.grupoActual) {
        this.cambiarGrupo(paginaEnGrupo);
      }
    }
  }

  cambiarGrupo(grupo: number) {
    const totalGrupos = Math.ceil(this.totalPaginas / this.paginasPorGrupo);

    if (grupo >= 1 && grupo <= totalGrupos) {
      this.grupoActual = grupo;
      const primeraPaginaDelGrupo = (grupo - 1) * this.paginasPorGrupo + 1;
      this.cambiarPagina(primeraPaginaDelGrupo);
    }
  }

  get totalPaginas(): number {
    return Math.ceil(this.publicaciones.length / this.publicacionesPorPagina);
  }

  get paginas(): number[] {
    const numeroTotalDePaginas = this.totalPaginas;
    const inicio = (this.grupoActual - 1) * this.paginasPorGrupo;
    const fin = Math.min(inicio + this.paginasPorGrupo, numeroTotalDePaginas);
    return Array.from({ length: fin - inicio }, (_, index) => inicio + index + 1);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 1000); // Puedes ajustar el rango según tus necesidades
  }
}
