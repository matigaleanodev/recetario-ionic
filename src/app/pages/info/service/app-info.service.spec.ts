import { TestBed } from '@angular/core/testing';
import { AppInfoService } from './app-info.service';
import { environment } from '@env/environment';
import { Capacitor } from '@capacitor/core';
import { App } from '@capacitor/app';

describe('AppInfoService', () => {
  let service: AppInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppInfoService);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería exponer el stage desde environment', () => {
    expect(service.appStage()).toBe(environment.appStage);
  });

  it('debería devolver la versión desde environment cuando no es nativo', async () => {
    spyOn(Capacitor, 'isNativePlatform').and.returnValue(false);

    const version = await service.getAppVersion();

    expect(version).toBe(environment.appVersion);
  });
});
