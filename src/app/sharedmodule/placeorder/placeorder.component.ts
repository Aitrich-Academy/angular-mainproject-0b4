import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { productData } from 'src/app/classes/productdata';
import { ProductDetailsService } from 'src/app/services/product-details.service';


@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent {
  public productData: any[] = []; // Initialize as an empty array
  
  constructor(public productService: ProductDetailsService, private activateRoute:ActivatedRoute, private route:Router) { 
    this.productService.getProducts()// Initialize in the constructor
  }

  // constructor(private router: Router) { }

  // showDetails() {
  //   this.router.navigateByUrl('/details');
  // }
}
