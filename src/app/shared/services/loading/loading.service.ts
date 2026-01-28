import { Injectable, inject } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly _loadingCtrl = inject(LoadingController);
  private loading?: HTMLIonLoadingElement;

  async show(message = 'Cargando...') {
    if (this.loading) return;

    this.loading = await this._loadingCtrl.create({
      message,
      spinner: 'crescent',
    });

    await this.loading.present();
  }

  async hide() {
    if (!this.loading) return;

    await this.loading.dismiss();
    this.loading = undefined;
  }
}
