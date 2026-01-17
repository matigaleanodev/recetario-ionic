export interface RecipeList {
  recipes: RecipeInfo[];
}

export interface QueryResult {
  number: number;
  offset: number;
  results: RecipeInfo[];
  totalResults: number;
}

export interface RecipeInfo {
  complete: boolean;
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredient[];
  id: number;
  title: string;
  author: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
  originalId: number | null;
  spoonacularSourceUrl: string;
}

interface IngredientMeasures {
  us: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
  metric: {
    amount: number;
    unitShort: string;
    unitLong: string;
  };
}

export interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: IngredientMeasures;
}

interface WinePairingProduct {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  averageRating: number;
  ratingCount: number;
  score: number;
  link: string;
}

interface WinePairing {
  pairedWines: string[];
  pairingText: string;
  productMatches: WinePairingProduct[];
}

interface StepIngredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface StepEquipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
  temperature?: {
    number: number;
    unit: string;
  };
}

export interface RecipeStep {
  number: number;
  step: string;
  ingredients: StepIngredient[];
  equipment: StepEquipment[];
}

export interface AnalyzedInstruction {
  name: string;
  steps: RecipeStep[];
}
