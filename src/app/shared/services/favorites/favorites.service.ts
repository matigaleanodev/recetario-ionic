import { inject, Injectable, signal } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { DailyRecipe } from '@recipes/models/daily-recipe.model';

const KEY_FAVORITOS = 'FAVORITOS';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly _storage = inject(StorageService);

  readonly favoritos = signal<DailyRecipe[]>([]);

  async cargarFavoritos() {
    const favoritos = await this._storage.getItem<DailyRecipe[]>(KEY_FAVORITOS);

    this.favoritos.set(favoritos ?? []);
  }

  agregarFavorito(recipe: DailyRecipe) {
    const favoritos = this.favoritos();

    if (favoritos.some(({ sourceId }) => sourceId === recipe.sourceId)) {
      return;
    }

    const nuevaLista = [...favoritos, recipe];
    this.actualizarFavoritos(nuevaLista);
  }

  removerFavorito(id: number) {
    const favoritos = this.favoritos().filter(
      ({ sourceId }) => sourceId !== id,
    );

    this.actualizarFavoritos(favoritos);
  }

  esFavorito(id: number) {
    const favoritos = this.favoritos();

    return favoritos.some(({ sourceId }) => sourceId === id);
  }

  private async actualizarFavoritos(nuevaLista: DailyRecipe[]) {
    this.favoritos.set(nuevaLista);

    await this._storage.setItem<DailyRecipe[]>(KEY_FAVORITOS, nuevaLista);
  }
}
