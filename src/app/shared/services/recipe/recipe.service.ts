import { Injectable, signal } from '@angular/core';
import { DailyRecipe } from '@recipes/models/daily-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  readonly selectedRecipe = signal<DailyRecipe | null>(null);

  readonly recipes = signal<DailyRecipe[]>([]);

  seleccionarReceta(recipe: DailyRecipe) {
    this.selectedRecipe.set(recipe);
  }
}
