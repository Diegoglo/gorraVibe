import { Component } from '@angular/core';
import { Product} from '../../../core/model/product.model';

@Component({
  selector: 'app-product-catalog2',
  templateUrl: './product-catalog2.component.html',
  styleUrl: './product-catalog2.component.css'
})
export class ProductCatalog2Component {
  hoveredProduct: string | null = null; // Debe ser string | null
  scrollAmount = 200; // Cantidad de desplazamiento


  scrollLeft() {
    const productList = document.querySelector('.product-listt');
    if (productList) {
      productList.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const productList = document.querySelector('.product-listt');
    if (productList) {
      productList.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  //Scroll y productos para nueva fila
  relatedProducts: Product[] = [
    {
      name: 'Labial Mate Rojo Clásico',
      description: 'Labial de larga duración con acabado mate.',
      price: 25.000,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Delineador Líquido Negro',
      description: 'Delineador líquido con punta de precisión para ojos intensos.',
      price: 30.000,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Sombra de Ojos en Tonos Tierra',
      description: 'Paleta de sombras con colores naturales y versátiles.',
      price: 28.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Rubor Compacto Rosa Claro',
      description: 'Rubor suave para un look natural.',
      price: 10.00,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Máscara de Pestañas Volumen Extremo',
      description: 'Máscara que brinda volumen y definición.',
      price: 12.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Corrector Líquido Alta Cobertura',
      description: 'Corrector para disimular imperfecciones y ojeras.',
      price: 15.00,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Base de Maquillaje Fluida',
      description: 'Base ligera con acabado luminoso.',
      price: 20.000,
      image: 'imagenes/base.png'
    },
    {
      name: 'Paleta de Iluminadores',
      description: 'Iluminadores para resaltar puntos clave del rostro.',
      price: 22.00,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Esmalte de Uñas Nude',
      description: 'Esmalte de uñas en tono neutro para cualquier ocasión.',
      price: 18.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Brillo Labial Transparente',
      description: 'Brillo labial hidratante con acabado glossy.',
      price: 27.00,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Primer Facial Hidratante',
      description: 'Prepara la piel para un maquillaje duradero.',
      price: 32.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Sombra de Ojos Glitter',
      description: 'Sombra de ojos con partículas brillantes.',
      price: 11.00,
      image: 'imagenes/labial.jpg'
    },
    {
      name: 'Polvo Compacto Traslúcido',
      description: 'Polvo para fijar el maquillaje sin agregar color.',
      price: 21.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Delineador de Labios Nude',
      description: 'Delineador de labios suave y preciso.',
      price: 29.00,
      image: 'imagenes/crema.png'
    },
    {
      name: 'Brocha para Polvos Sueltos',
      description: 'Brocha grande y suave para aplicar polvos.',
      price: 14.00,
      image: 'imagenes/labial.jpg'
    }
  ];
  
  
  scrollLeftRelated() {
    const relatedProductList = document.querySelector('.product-listt.related');
    if (relatedProductList) {
      relatedProductList.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }
  
  scrollRightRelated() {
    const relatedProductList = document.querySelector('.product-listt.related');
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
