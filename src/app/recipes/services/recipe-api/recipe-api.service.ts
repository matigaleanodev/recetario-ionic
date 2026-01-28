import { httpResource } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import {
  Lang,
  TranslateService,
} from '@shared/services/translate/translate.service';
import { environment } from 'src/environments/environment.development';
import { DailyRecipe } from '../../models/daily-recipe.model';
import { RecipeDetail } from '../../models/recipe-detail.model';
import { SimilarRecipe } from '../../models/similar-recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  private readonly baseUrl = environment.API_URL;
  private readonly _translate = inject(TranslateService);

  readonly lang = computed<Lang>(() => this._translate.lang());

  readonly dailyRecipes = httpResource<DailyRecipe[]>(() => ({
    url: `${this.baseUrl}/recipes/daily`,
    params: {
      lang: this.lang(),
    },
  }));

  private readonly recipeId = signal<number | null>(null);

  readonly recipeDetail = httpResource<RecipeDetail | null>(() => {
    const id = this.recipeId();
    if (!id) return undefined;

    return {
      url: `${this.baseUrl}/recipes/${id}`,
      params: {
        lang: this.lang(),
      },
    };
  });

  setRecipeId(id: number): void {
    this.recipeId.set(id);
  }

  readonly similarRecipes = httpResource<SimilarRecipe[]>(() => {
    const id = this.recipeId();
    if (!id) return undefined;

    return {
      url: `${this.baseUrl}/recipes/${id}/similar`,
    };
  });
}
