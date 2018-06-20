import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({  
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
          "productId": id,
          "productName": "Leaf Rake",
          "productCode": "GDN-001",
          "releaseDate": "March 20 2018",
          "description": "Leaf rake with 28 inc wooden handle",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": ""  
        }    
  }
  onBack(): void {
    this._router.navigate(['/products']);
  }

}
