import { Component } from '@angular/core';
import { ComentariosService } from '../services/comentarios.service';
import { Comentarios} from '../interfaces/comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comentarios: Comentarios[] = [];

  constructor(private comentariosService: ComentariosService) {}

  ngOnInit(): void {
    this.cargarComentarios();
  }

  cargarComentarios(): void {
    this.comentariosService.traerComentarios().subscribe((res: Comentarios[]) => {
      // Mezcla aleatoriamente los comentarios
      this.comentarios = this.shuffleArray(res);
      // Toma los primeros 10 comentarios
      this.comentarios = this.comentarios.slice(0, 6);
    });
  }

  shuffleArray(array: any[]): any[] {
    // Función para mezclar aleatoriamente un arreglo
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
