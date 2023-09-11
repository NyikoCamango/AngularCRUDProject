import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.GetProductsFromService();
  }

  GetProductsFromService() {
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res;
      console.log("Products:", this.products);
    });
  }
}
