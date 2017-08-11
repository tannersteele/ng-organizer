import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('First Test Recipe', 'Yum!', 
    'http://exoduslasvegas.com/wp-content/uploads/2016/11/Tiesto-1.jpg'),
    new Recipe('Second Test Recipe', 'Yummy!!', 
    'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ'),
    new Recipe('Third Test Recipe', 'YUMMM!', 
    'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg?itok=naGPMoRQ')
  ];

  onRecipeSelected(recipe : Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
