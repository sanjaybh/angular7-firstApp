import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  //styleUrls: ["./app.component.css"]
  styles: [
    `
      h3 {
        color: darkblue;
      }
    `
  ] //color:dodgerblue
})
export class AppComponent {
  title = "AppComponent!";
}
