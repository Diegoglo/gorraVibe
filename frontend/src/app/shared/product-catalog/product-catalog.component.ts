import { Component } from '@angular/core';
import { Product} from '../../../core/model/product.model';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {
  hoveredProduct: string | null = null; // Debe ser string | null
  scrollAmount = 200; // Cantidad de desplazamiento


  scrollLeft() {
    const productList = document.querySelector('.product-list');
    if (productList) {
      productList.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const productList = document.querySelector('.product-list');
    if (productList) {
      productList.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  //Scroll y productos para nueva fila
  relatedProducts: Product[] = [
    {
      name: 'Jockey Clásico Negro  L03',
      description: 'Jockey de algodón negro con ajuste trasero.',
      price: 25.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Jockey Estampado Camuflaje L',
      description: 'Gorra con diseño de camuflaje para un look urbano.  Codigo SKU G03',
      price: 30.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Jockey Retro Azul',
      description: 'Gorra retro en color azul con logo vintage.',
      price: 28.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Calcetines Divertidos - Animales',
      description: 'Calcetines con estampados de animales, suaves y cómodos.',
      price: 10.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Calcetines Largos - Rayas',
      description: 'Calcetines largos de algodón con diseño a rayas.',
      price: 12.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Calcetines Cortos - Colores Sólidos',
      description: 'Pack de calcetines cortos en colores sólidos.',
      price: 15.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Bóxer Algodón - Negro',
      description: 'Bóxer de algodón negro, cómodo y ajustado.',
      price: 20.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Bóxer Estampado - Geométrico',
      description: 'Bóxer con estampado geométrico moderno.',
      price: 22.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Bóxer Microfibra - Azul Marino',
      description: 'Bóxer de microfibra azul marino, ideal para el uso diario.',
      price: 18.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Jockey Deportivo - Rojo',
      description: 'Gorra deportiva roja con ventilación, perfecta para hacer ejercicio.',
      price: 27.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Jockey de Playa - Blanco',
      description: 'Jockey de playa blanco, ligero y con ala ancha.',
      price: 32.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Calcetines Cool - Frutas',
      description: 'Calcetines con estampados de frutas, frescos y divertidos.',
      price: 11.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Bóxer Estampado - Estrellas',
      description: 'Bóxer con estampado de estrellas en fondo oscuro.',
      price: 21.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Jockey Ajustable - Verde',
      description: 'Gorra ajustable en color verde, ideal para el verano.',
      price: 29.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Calcetines Sport - Negro',
      description: 'Calcetines deportivos negros con refuerzo en el talón.',
      price: 14.00,
      image: 'imagenes/jockey3.png'
    }
  ];
  
  scrollLeftRelated() {
    const relatedProductList = document.querySelector('.product-list.related');
    if (relatedProductList) {
      relatedProductList.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }
  
  scrollRightRelated() {
    const relatedProductList = document.querySelector('.product-list.related');
    if (relatedProductList) {
      relatedProductList.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  products: Product[] = [
    {
      name: 'Jockey Clásico Negro',
      description: 'Jockey de algodón negro con ajuste trasero.',
      price: 25.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Jockey Estampado Camuflaje',
      description: 'Gorra con diseño de camuflaje para un look urbano.',
      price: 30.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Jockey Retro Azul',
      description: 'Gorra retro en color azul con logo vintage.',
      price: 28.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Calcetines Divertidos - Animales',
      description: 'Calcetines con estampados de animales, suaves y cómodos.',
      price: 10.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Calcetines Largos - Rayas',
      description: 'Calcetines largos de algodón con diseño a rayas.',
      price: 12.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Calcetines Cortos - Colores Sólidos',
      description: 'Pack de calcetines cortos en colores sólidos.',
      price: 15.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Bóxer Algodón - Negro',
      description: 'Bóxer de algodón negro, cómodo y ajustado.',
      price: 20.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Bóxer Estampado - Geométrico',
      description: 'Bóxer con estampado geométrico moderno.',
      price: 22.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Bóxer Microfibra - Azul Marino',
      description: 'Bóxer de microfibra azul marino, ideal para el uso diario.',
      price: 18.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Jockey Deportivo - Rojo',
      description: 'Gorra deportiva roja con ventilación, perfecta para hacer ejercicio.',
      price: 27.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Jockey de Playa - Blanco',
      description: 'Jockey de playa blanco, ligero y con ala ancha.',
      price: 32.00,
      image: 'imagenes/jockey2.png'
    },
    {
      name: 'Calcetines Cool - Frutas',
      description: 'Calcetines con estampados de frutas, frescos y divertidos.',
      price: 11.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Bóxer Estampado - Estrellas',
      description: 'Bóxer con estampado de estrellas en fondo oscuro.',
      price: 21.00,
      image: 'imagenes/jockey3.png'
    },
    {
      name: 'Jockey Ajustable - Verde',
      description: 'Gorra ajustable en color verde, ideal para el verano.',
      price: 29.00,
      image: 'imagenes/jockey1.png'
    },
    {
      name: 'Calcetines Sport - Negro',
      description: 'Calcetines deportivos negros con refuerzo en el talón.',
      price: 14.00,
      image: 'imagenes/jockey3.png'
    }
  ]
}
