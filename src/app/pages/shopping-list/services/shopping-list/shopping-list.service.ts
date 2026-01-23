import { inject, Injectable, signal } from '@angular/core';
import { FavoritesService } from '@shared/services/favorites/favorites.service';
import { StorageService } from '@shared/services/storage/storage.service';

const KEY_SHOPPING = 'SHOPPING_LIST';

interface ShoppingRecipeState {
  recipeId: number;
  checkedIngredientIds: number[];
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private readonly _storage = inject(StorageService);
  private readonly _favoritos = inject(FavoritesService);

  readonly shoppingState = signal<ShoppingRecipeState[]>([]);

  async init() {
    await this.load();
    this.syncWithFavorites();
  }

  private async load() {
    const stored =
      await this._storage.getItem<ShoppingRecipeState[]>(KEY_SHOPPING);

    this.shoppingState.set(stored ?? []);
  }

  private async persist() {
    await this._storage.setItem(KEY_SHOPPING, this.shoppingState());
  }

  private syncWithFavorites() {
    const favoritos = this._favoritos.favoritos();
    const current = this.shoppingState();

    const favoritosIds = favoritos.map((r) => r.id);

    const filtrados = current.filter((s) => favoritosIds.includes(s.recipeId));

    const nuevos = favoritosIds
      .filter((id) => !filtrados.some((s) => s.recipeId === id))
      .map((id) => ({
        recipeId: id,
        checkedIngredientIds: [],
      }));

    this.shoppingState.set([...filtrados, ...nuevos]);
    this.persist();
  }

  getRecipeState(recipeId: number) {
    return this.shoppingState().find((s) => s.recipeId === recipeId) ?? null;
  }

  isIngredientChecked(recipeId: number, ingredientId: number) {
    const state = this.getRecipeState(recipeId);
    if (!state) return false;

    return state.checkedIngredientIds.includes(ingredientId);
  }

  toggleIngredient(recipeId: number, ingredientId: number) {
    const list = [...this.shoppingState()];
    const state = list.find((s) => s.recipeId === recipeId);

    if (!state) return;

    const index = state.checkedIngredientIds.indexOf(ingredientId);

    if (index >= 0) {
      state.checkedIngredientIds.splice(index, 1);
    } else {
      state.checkedIngredientIds.push(ingredientId);
    }

    this.shoppingState.set(list);
    this.persist();
  }

  clearRecipe(recipeId: number) {
    const filtered = this.shoppingState().filter(
      (s) => s.recipeId !== recipeId,
    );

    this.shoppingState.set(filtered);
    this.persist();
  }
}
