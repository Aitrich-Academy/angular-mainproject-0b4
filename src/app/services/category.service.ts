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
//   categoryData : categoryData[] =[
//     {
//       id:1,
//       image:"../../assets/images/image 12.png",
//       category: 'Skin Care',
//       productName:'ASUS X144SUV',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     },
//     {
//       id:2,
//       image:"../../assets/images/image 12-1.png",
//       category: 'Laptops & PC',
//       productName:'Iphone 14',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     },
//     {
//       id:3,
//       image:"../../assets/images/image 12-5.png",
//       category: 'Smartphones',
//       productName:'ASUS Zenbook',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     },
//     {
//       id:4,
//       image:"../../assets/images/image 12-2.png",
//       category: 'Fashion',
//       productName:'SAMSUNG A51',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     },
//     {
//       id:5,
//       image:"../../assets/images/image 12-3.png",
//       category: 'Electronics',
//       productName:'Baju Wanita',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     },
    
//     {
//       id:6,
//       image:"../../assets/images/image 12-6.png",
//       category: 'Lifestyle',
//       productName:'Tas Kece',
//       productDesc:'lorem ipsum decorum consectetur',
//       amount:2800
//     }
    
    

//   ]

//   getCategory(){
//     return this.categoryData;
//   }
// }