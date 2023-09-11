import { Component } from '@angular/core';
import { Productos } from '../interfaces/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Productos[] = [];

  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productosService.getProducts().subscribe((response: any) => {
      this.productos = response;
      console.log(this.productos);
    });
  }

  loadProduct(id: string): void {
    this.productosService.getProduct(id).subscribe((response: any) => {
      this.productos = response;
      console.log(this.productos);
    });
  }
}
