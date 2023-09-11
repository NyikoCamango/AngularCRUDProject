import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {
  categories: any[] = [];

constructor(private productService: ProductService){}

ngOnInit() {
  this.GetAllCategories();
}

GetAllCategories() {
  this.productService.GetAllCategories().subscribe((res: any) => {
    this.categories = res;
    console.log("Categories", this.categories);
  });
}

}
