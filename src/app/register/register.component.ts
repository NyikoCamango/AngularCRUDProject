import { Component } from '@angular/core';
import { User } from '../user.model'; 
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  /** this is from the interface that is created for the user in the user.model.ts */
  user:User={
    name: '',
    surname: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private productService: ProductService) {}

  onRegister()
  {
    /** the product service enables us to have access to the functions that are within the service */
    this.productService.addUser(this.user).subscribe(
      (res) => /**res stands for response */
      {
        console.log('User registration successful', res);

      },
      (error) => /** error handling */
      {
        console.log('User registration was unsuccessful', error);
      }
    );
     

  }

}

