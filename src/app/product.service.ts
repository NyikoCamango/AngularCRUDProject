import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productUrl="http://localhost:3000/products"
private CategoryUrl="http://localhost:3000/categories"
private UserUrl="http://localhost:3000/user"

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

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.UserUrl, user);
  }
}
