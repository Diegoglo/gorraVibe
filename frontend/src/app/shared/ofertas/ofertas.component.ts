import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  image: string;
  originalPrice: number;
  price: number;
  discount: number;
}

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  
}
