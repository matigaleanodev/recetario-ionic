import { Component, computed, inject } from '@angular/core';

import { IonContent, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { DailyRecipe } from '@recipes/models/daily-recipe.model';
import { RecipeCardComponent } from '@shared/components/recipe-card/recipe-card.component';
import { FavoritesService } from '@shared/services/favorites/favorites.service';
import { RecipeService } from '@recipes/services/recipe/recipe.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, IonContent, RecipeCardComponent],
})
export class FavoritesPage {
  private readonly _service = inject(FavoritesService);
  private readonly _recipes = inject(RecipeService);

  readonly favoritos = computed(() => this._service.favoritos());

  ionViewWillEnter() {
    this._service.cargarFavoritos();
  }

  toggleFavorito(receta: DailyRecipe) {
    const esFavorito = this._service.esFavorito(receta.sourceId);
    if (esFavorito) {
      this._service.removerFavorito(receta.sourceId);
    } else {
      this._service.agregarFavorito(receta);
    }
  }

  recetasSimilares({ sourceId }: DailyRecipe) {
    this._recipes.recetasSimilares(sourceId);
  }

  detalleReceta({ sourceId }: DailyRecipe) {
    this._recipes.detalleReceta(sourceId);
  }
}
