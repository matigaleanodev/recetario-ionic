import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecipeMetaExtendedComponent } from './recipe-meta-extended.component';

describe('RecipeMetaExtendedComponent', () => {
  let component: RecipeMetaExtendedComponent;
  let fixture: ComponentFixture<RecipeMetaExtendedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMetaExtendedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeMetaExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
