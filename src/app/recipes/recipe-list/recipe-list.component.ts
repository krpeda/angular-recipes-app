import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor( private recipeService: RecipeService
    , private router: Router
    , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  //Simply another way to navigate, if some logic needs to be executed prior to routing
  //Can be done with simply routerLink = 'new' in HTML
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
