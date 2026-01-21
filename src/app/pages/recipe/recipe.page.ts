import { Component, computed, input, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFooter,
} from '@ionic/angular/standalone';
import { RecipeInfo } from '@shared/models/recipe.model';
import { RecipeMetaComponent } from './components/recipe-meta/recipe-meta.component';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
    RecipeMetaComponent,
  ],
})
export class RecipePage implements OnInit {
  readonly recipe = input.required<RecipeInfo>();

  constructor() {}

  ngOnInit() {}

  isFavorite = computed(() => true);

  toggleFavorito() {}

  verSimilares() {}
}
