import { Component } from '@angular/core';
import {
  IonContent,
  IonListHeader,
  IonLabel,
  IonList,
  IonIcon,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  constructOutline,
  documentTextOutline,
  helpCircleOutline,
  informationCircleOutline,
  logoGithub,
  mailOutline,
  nutritionOutline,
  shieldCheckmarkOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonItem, IonIcon, IonList, IonLabel, IonListHeader, IonContent],
})
export class InfoPage {
  constructor() {
    addIcons({
      mailOutline,
      logoGithub,
      constructOutline,
      nutritionOutline,
      helpCircleOutline,
      shieldCheckmarkOutline,
      documentTextOutline,
      informationCircleOutline,
    });
  }
}
