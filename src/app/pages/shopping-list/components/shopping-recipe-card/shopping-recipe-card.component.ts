import { Component, computed, inject, input } from '@angular/core';
import {
  ShoppingListService,
  ShoppingRecipeState,
} from '@pages/shopping-list/services/shopping-list/shopping-list.service';
import { IonItem, IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { DailyRecipe } from '@recipes/models/daily-recipe.model';

@Component({
  selector: 'app-shopping-recipe-card',
  imports: [IonItem, IonCheckbox, IonLabel],
  templateUrl: './shopping-recipe-card.component.html',
  styleUrls: ['./shopping-recipe-card.component.scss'],
})
export class ShoppingRecipeCardComponent {
  readonly recipe = input.required<DailyRecipe>();
  readonly shoppingState = input.required<ShoppingRecipeState>();

  readonly ingredients = computed(() => this.recipe().ingredients);

  private readonly _service = inject(ShoppingListService);

  isIngredientChecked(ingredientId: number) {
    return this._service.isIngredientChecked(
      this.recipe().sourceId,
      ingredientId,
    );
  }

  async toggleIngredient(ingredientId: number) {
    await this._service.toggleIngredient(this.recipe().sourceId, ingredientId);
  }
}
