import { Component, input, OnInit } from '@angular/core';
import { ShoppingRecipeState } from '@pages/shopping-list/services/shopping-list/shopping-list.service';
import { RecipeInfo } from '@shared/models/recipe.model';

@Component({
  selector: 'app-shopping-recipe-card',
  templateUrl: './shopping-recipe-card.component.html',
  styleUrls: ['./shopping-recipe-card.component.scss'],
})
export class ShoppingRecipeCardComponent {
  readonly recipe = input.required<RecipeInfo>();
  readonly shoppingState = input.required<ShoppingRecipeState>();
  constructor() {}

  ngOnInit() {}
}
