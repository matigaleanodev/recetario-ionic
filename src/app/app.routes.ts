import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'recipe/:id',
    loadComponent: () =>
      import('./pages/recipe/recipe.page').then((m) => m.RecipePage),
  },
  {
    path: 'similar/:id',
    loadComponent: () =>
      import('./pages/similar/similar.page').then((m) => m.SimilarPage),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
