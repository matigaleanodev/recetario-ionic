import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  readonly lang = signal<Lang>('en');
}
