import { Component, computed, effect, inject, signal } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonGrid,
  IonCol,
} from '@ionic/angular/standalone';
import { ShoppingListService } from './services/shopping-list/shopping-list.service';
import { ShoppingRecipeCardComponent } from './components/shopping-recipe-card/shopping-recipe-card.component';
import { FavoritesService } from '@shared/services/favorites/favorites.service';
import { ShoppingRecipe } from '@recipes/models/shopping-recipe.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonRow, IonContent, ShoppingRecipeCardComponent],
})
export class ShoppingListPage {
  private readonly _service = inject(ShoppingListService);
  private readonly _favorites = inject(FavoritesService);

  readonly shoppingState = computed(() => this._service.shoppingState());
  readonly favoritos = computed(() => this._favorites.favoritos());

  readonly shoppingList = signal<ShoppingRecipe[]>([]);

  async ionViewWillEnter() {
    await this._favorites.cargarFavoritos();
    await this._service.init();
  }

  getShoppingState(recipeId: number) {
    return this.shoppingState().find((s) => s.recipeId === recipeId)!;
  }
}
