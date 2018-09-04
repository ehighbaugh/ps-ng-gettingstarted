import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Red Bull',
      'productCode': 'HEL-012',
      'releaseDate': 'December 27, 2014',
      'description': 'A can of red bull',
      'price': 4.99,
      'starRating': 2.5,
      'imageUrl': 'https://openclipart.org/detail/283385/redbull'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
