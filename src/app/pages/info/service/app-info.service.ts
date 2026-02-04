import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';
import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AppInfoService {
  readonly appStage = signal(environment.appStage);

  async getAppVersion(): Promise<string> {
    if (Capacitor.isNativePlatform()) {
      try {
        const info = await App.getInfo();
        return info.version;
      } catch {
        return environment.appVersion;
      }
    }

    return environment.appVersion;
  }
}
