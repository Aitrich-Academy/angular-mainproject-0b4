import { Injectable } from '@angular/core';
import { categoryData } from '../classes/categorydata';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  categoryData : categoryData[] =[
    {
      id:1,
      image:"../../../assets/images/image 12.png",
      category: 'Skin Care'
    },
    {
      id:2,
      image:"../../../assets/images/image 12-1.png",
      category: 'Laptops & PC'
    },
    {
      id:3,
      image:"../../../assets/images/image 12-5.png",
      category: 'Smartphones'
    },
    {
      id:4,
      image:"../../../assets/images/image 12-3.png",
      category: 'Fashion'
    },
    {
      id:5,
      image:"../../../assets/images/image 12-5.png",
      category: 'Electronics'
    },
    
    {
      id:6,
      image:"../../../assets/images/image 12-4.png",
      category: 'Lifestyle'
    }

  ]


  getCategory(){
    return this.categoryData;
  }
}
