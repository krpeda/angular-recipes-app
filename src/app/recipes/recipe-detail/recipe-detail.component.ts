import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
     private recipeService: RecipeService,
     private router: Router) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  onSelectRecipe(selectedRecipe: Recipe) {
    this.recipe = selectedRecipe;
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach(element=> this.shoppingListService.addIngredient(element));
  }

  onEditRecipe() {
      this.router.navigate(["edit"], {relativeTo: this.route});
  }
}
