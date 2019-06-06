import { Component } from '@angular/core';

//Adding Decorator
@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styles: [
    `
      h5 {
        padding:15px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `
  ]
})
export class SuccessComponent {}