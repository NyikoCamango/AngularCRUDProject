import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productUrl="http://localhost:3000/products"
private CategoryUrl="http://localhost:3000/categories"

  constructor(private http: HttpClient) { 

  }

  GetAllProducts()
  {
    return this.http.get(this.productUrl)
    
  }
  GetAllCategories()
  {
    return this.http.get(this.CategoryUrl)
  }
}
