import { Component } from '@angular/core';



declare var bootstrap: any; // Para usar los modales de Bootstrap

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  tiendaSeleccionada: any;

  tiendas = [
    {
      nombre: 'Tienda Charlie',
      descripcion: 'Mayor variedad de gorras.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Edificio GeoPark',
      ubicacion: 'Santiago, Chile'
    },
    {
      nombre: 'Tienda Diego',
      descripcion: 'Mayor variedad de ropa interior.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Calle Falsa 456, Valparaíso',
      ubicacion: 'Placilla, Valparaíso, Chile'
    },
    {
      nombre: 'Tienda Centro',
      descripcion: 'Todos los productos.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Plaza Central 789, Viña del Mar',
      ubicacion: 'Viña del Mar, Chile'
    }
  ];


  abrirModal(tienda: any) {
    this.tiendaSeleccionada = tienda;
    const modal = new bootstrap.Modal(document.getElementById('tiendaModal'));
    modal.show();
  }
  
}
