import { RecipeIngredient } from './recipe-ingredient.model';
import { RecipeInstruction } from './recipe-instruction.model';

export interface RecipeDetail {
  sourceId: number;
  title: string;
  summary: string;
  instructions: RecipeInstruction[];
  ingredients: RecipeIngredient[];
  image: string;
  readyInMinutes: number;
  servings: number;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  lang: 'en' | 'es';
}
