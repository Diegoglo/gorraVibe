import { Component } from '@angular/core';
import { Product} from '../../../core/model/product.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  productos: Product[] = [
    {
      name: 'Jockey Clásico Negro',
      description: 'Jockey de algodón negro con ajuste trasero.',
      price: 25.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jockey Estampado Camuflaje',
      description: 'Gorra con diseño de camuflaje para un look urbano.',
      price: 30.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jockey Retro Azul',
      description: 'Gorra retro en color azul con logo vintage.',
      price: 28.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Calcetines Divertidos - Animales',
      description: 'Calcetines con estampados de animales, suaves y cómodos.',
      price: 10.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Calcetines Largos - Rayas',
      description: 'Calcetines largos de algodón con diseño a rayas.',
      price: 12.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Calcetines Cortos - Colores Sólidos',
      description: 'Pack de calcetines cortos en colores sólidos.',
      price: 15.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Bóxer Algodón - Negro',
      description: 'Bóxer de algodón negro, cómodo y ajustado.',
      price: 20.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Bóxer Estampado - Geométrico',
      description: 'Bóxer con estampado geométrico moderno.',
      price: 22.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Bóxer Microfibra - Azul Marino',
      description: 'Bóxer de microfibra azul marino, ideal para el uso diario.',
      price: 18.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jockey Deportivo - Rojo',
      description: 'Gorra deportiva roja con ventilación, perfecta para hacer ejercicio.',
      price: 27.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jockey de Playa - Blanco',
      description: 'Jockey de playa blanco, ligero y con ala ancha.',
      price: 32.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Calcetines Cool - Frutas',
      description: 'Calcetines con estampados de frutas, frescos y divertidos.',
      price: 11.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Bóxer Estampado - Estrellas',
      description: 'Bóxer con estampado de estrellas en fondo oscuro.',
      price: 21.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Jockey Ajustable - Verde',
      description: 'Gorra ajustable en color verde, ideal para el verano.',
      price: 29.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Calcetines Sport - Negro',
      description: 'Calcetines deportivos negros con refuerzo en el talón.',
      price: 14.00,
      image: 'https://via.placeholder.com/300'
    }
];

  
}
