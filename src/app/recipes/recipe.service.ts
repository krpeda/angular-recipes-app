import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Kinoa Saladik ', 
    'Smells good'
    , 'https://p1.pxfuel.com/preview/548/595/580/gastronomy-food-dishes-eat.jpg'
    ,[
      new Ingredient("Kinoa", 2),
       new Ingredient("Pea", 1),
        new Ingredient("Soy Sauce", 1)
    ]), 
    new Recipe('Macaroni pizza',
     'tastes nice'
    , 'https://static01.nyt.com/images/2020/02/10/dining/onepot-cheesypasta/onepot-cheesypasta-articleLarge.jpg',
    [ new Ingredient("Macaroni", 2),
     new Ingredient("Cheese", 1),
      new Ingredient("Tomato Sauce", 1),
      new Ingredient("Parsley", 1)],
      )
  ]; 

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
