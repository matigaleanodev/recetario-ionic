import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('@pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('@pages/favorites/favorites.page').then(
            (m) => m.FavoritesPage,
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
