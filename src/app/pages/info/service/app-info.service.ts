import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AppInfoService {
  private readonly isNative = Capacitor.isNativePlatform();

  readonly appStage = signal(environment.appStage);

  async getAppVersion(): Promise<string> {
    if (this.isNative) {
      const info = await App.getInfo();
      return info.version;
    }

    return environment.appVersion;
  }
}
