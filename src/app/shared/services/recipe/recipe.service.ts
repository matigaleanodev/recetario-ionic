import { inject, Injectable, signal } from '@angular/core';
import { RecipeInfo } from '@shared/models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  readonly selectedRecipe = signal<RecipeInfo | null>(null);

  readonly recipes = signal<RecipeInfo[]>(this.generateMockRecipes());

  seleccionarReceta(recipe: RecipeInfo) {
    this.selectedRecipe.set(recipe);
  }

  generateMockRecipes(): RecipeInfo[] {
    const baseIngredients = [
      this.createIngredient(2, 'tomate', 150, 'g'),
      this.createIngredient(3, 'cebolla', 100, 'g'),
      this.createIngredient(1, 'pasta', 200, 'g'),
      this.createIngredient(4, 'ajo', 2, 'dientes'),
      this.createIngredient(5, 'aceite de oliva', 2, 'cda'),
      this.createIngredient(6, 'queso rallado', 50, 'g'),
    ];

    const baseSteps = [
      'Preparar todos los ingredientes.',
      'Calentar una sartén con aceite.',
      'Agregar los ingredientes principales.',
      'Cocinar a fuego medio durante varios minutos.',
      'Servir caliente y disfrutar.',
    ];

    const recipesData = [
      { id: 1001, title: 'Pasta con salsa roja', vegetarian: true },
      { id: 1002, title: 'Pollo al horno con papas', vegetarian: false },
      { id: 1003, title: 'Arroz salteado con vegetales', vegetarian: true },
      { id: 1004, title: 'Ensalada César', vegetarian: false },
      { id: 1005, title: 'Wok de vegetales', vegetarian: true },
      { id: 1006, title: 'Tacos de carne', vegetarian: false },
      { id: 1007, title: 'Milanesas con puré', vegetarian: false },
      { id: 1008, title: 'Risotto de champiñones', vegetarian: true },
      { id: 1009, title: 'Curry de verduras', vegetarian: true },
      { id: 1010, title: 'Salmón al limón', vegetarian: false },
      { id: 1011, title: 'Pizza casera', vegetarian: true },
      { id: 1012, title: 'Omelette de queso', vegetarian: true },
    ];

    return recipesData.map((data, index) =>
      this.createRecipe(
        data.id,
        data.title,
        data.vegetarian,
        baseIngredients,
        baseSteps,
        index,
      ),
    );
  }

  createRecipe(
    id: number,
    title: string,
    vegetarian: boolean,
    ingredients: any[],
    steps: string[],
    index: number,
  ): RecipeInfo {
    return {
      id,
      title,
      image: `https://spoonacular.com/recipeImages/${id}-556x370.jpg`,
      imageType: 'jpg',
      readyInMinutes: 20 + index * 5,
      servings: 2 + (index % 3),
      sourceUrl: '',
      spoonacularSourceUrl: '',
      summary: `Receta deliciosa de ${title.toLowerCase()}.`,
      instructions: steps.join(' '),
      analyzedInstructions: [
        {
          name: '',
          steps: steps.map((step, i) => ({
            number: i + 1,
            step,
            ingredients: [],
            equipment: [],
          })),
        },
      ],
      extendedIngredients: ingredients.slice(0, 5),
      cuisines: ['International'],
      dishTypes: ['main course'],
      diets: vegetarian ? ['vegetarian'] : [],
      occasions: [],
      vegetarian,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      veryHealthy: vegetarian,
      cheap: true,
      veryPopular: index % 2 === 0,
      sustainable: vegetarian,
      lowFodmap: false,
      weightWatcherSmartPoints: vegetarian ? 8 : 14,
      gaps: 'no',
      preparationMinutes: 10,
      cookingMinutes: 10 + index * 2,
      aggregateLikes: 100 + index * 50,
      healthScore: vegetarian ? 80 : 50,
      creditsText: 'Fake Spoonacular',
      sourceName: 'Spoonacular',
      pricePerServing: 150 + index * 20,
      winePairing: {
        pairedWines: [],
        pairingText: '',
        productMatches: [],
      },
      complete: true,
      author: 'Spoonacular',
      originalId: null,
    };
  }

  createIngredient(id: number, name: string, amount: number, unit: string) {
    return {
      id,
      aisle: '',
      image: '',
      consistency: 'solid',
      name,
      nameClean: name,
      original: `${amount} ${unit} de ${name}`,
      originalName: name,
      amount,
      unit,
      meta: [],
      measures: {
        us: { amount, unitShort: unit, unitLong: unit },
        metric: { amount, unitShort: unit, unitLong: unit },
      },
    };
  }
}
