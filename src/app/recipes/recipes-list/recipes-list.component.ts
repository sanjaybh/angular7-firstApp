import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "This is test",
      "https://images.media-allrecipes.com/images/54776.jpg?width=420&height=237"
    ),
    new Recipe(
      "Test Recipe",
      "This is test",
      "https://images.media-allrecipes.com/images/54776.jpg?width=420&height=237"
    )
  ];
  constructor() {}

  ngOnInit() {}
}




