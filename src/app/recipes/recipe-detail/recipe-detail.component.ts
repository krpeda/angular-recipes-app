import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  

  constructor(private shoppingListService: ShoppingListService) { }
  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

  onSelectRecipe(selectedRecipe: Recipe) {
    this.recipe = selectedRecipe;
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach(element=> this.shoppingListService.addIngredient(element));
  }
}
