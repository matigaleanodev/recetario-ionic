import { Component, computed, input, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent, IonFooter } from '@ionic/angular/standalone';
import { RecipeInfo } from '@shared/models/recipe.model';
import { RecipeMetaComponent } from './components/recipe-meta/recipe-meta.component';
import { RecipeHeroComponent } from './components/recipe-hero/recipe-hero.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonContent,
    FormsModule,
    RecipeMetaComponent,
    RecipeHeroComponent,
  ],
})
export class RecipePage implements OnInit {
  readonly recipe = input.required<RecipeInfo>();

  readonly imageUrl = computed(() => {
    const recipe = this.recipe();
    if (!recipe) return '';

    return (
      'https://spoonacular.com/recipeImages/' +
      recipe.id +
      '-636x393.' +
      (recipe.imageType || 'jpg')
    );
  });

  constructor() {}

  ngOnInit() {}

  isFavorite = computed(() => true);

  toggleFavorito() {}

  verSimilares() {}
}
