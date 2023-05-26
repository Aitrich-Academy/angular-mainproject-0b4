import { Component } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent {
  public productData: any[] = []; // Initialize as an empty array
  // or
  constructor(public productService: ProductDetailsService) { 
    this.productService.getProducts()// Initialize in the constructor
  }

  
}
