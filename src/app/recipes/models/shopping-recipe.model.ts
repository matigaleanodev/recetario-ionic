import { RecipeIngredient } from './recipe-ingredient.model';

export interface ShoppingRecipe {
  sourceId: number;
  title: string;
  ingredients: RecipeIngredient[];
}
