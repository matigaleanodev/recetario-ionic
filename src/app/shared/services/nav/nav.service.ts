import { inject, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private readonly _navController = inject(NavController);

  forward(path: string) {
    this._navController.navigateForward(path);
  }

  back() {
    this._navController.back();
  }

  root(path: string) {
    this._navController.navigateRoot(path, { replaceUrl: true });
  }

  volverHome() {
    this.root('/home');
  }
}
