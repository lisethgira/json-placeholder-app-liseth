import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';
import { Tareas } from '../interfaces/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})

export class TareasComponent {
  tareas: Tareas[] = [];
  paginaActual: number = 1;
  tareasPorPagina: number = 8;
  paginasPorGrupo: number = 5; // Cantidad de páginas por grupo
  grupoActual: number = 1; // Grupo de páginas actual


  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareasService.traerTareas().subscribe((res: any) => {
      this.tareas = res;
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
    return Math.ceil(this.tareas.length / this.tareasPorPagina);
  }

  get paginas(): number[] {
    const numeroTotalDePaginas = this.totalPaginas;
    const inicio = (this.grupoActual - 1) * this.paginasPorGrupo;
    const fin = Math.min(inicio + this.paginasPorGrupo, numeroTotalDePaginas);
    return Array.from({ length: fin - inicio }, (_, index) => inicio + index + 1);
  }
}

