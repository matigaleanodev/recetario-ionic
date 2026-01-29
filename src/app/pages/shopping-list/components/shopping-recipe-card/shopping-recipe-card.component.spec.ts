import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingRecipeCardComponent } from './shopping-recipe-card.component';
import {
  ShoppingRecipeState,
  ShoppingListService,
} from '@pages/shopping-list/services/shopping-list/shopping-list.service';
import { ShoppingRecipe } from '@recipes/models/shopping-recipe.model';

describe('ShoppingRecipeCardComponent', () => {
  let component: ShoppingRecipeCardComponent;
  let fixture: ComponentFixture<ShoppingRecipeCardComponent>;

  const recipeMock: ShoppingRecipe = {
    sourceId: 1,
    title: 'Receta test',
    ingredients: [
      {
        id: 10,
        name: 'Ingrediente 1',
        original: '',
        amount: 1,
        unit: '',
        image: '',
      },
      {
        id: 20,
        name: 'Ingrediente 2',
        original: '',
        amount: 1,
        unit: '',
        image: '',
      },
    ],
  };
  const shoppingStateMock: ShoppingRecipeState = {
    recipeId: 1,
    checkedIngredientIds: [10],
  };

  const shoppingListServiceMock = {
    isIngredientChecked: jasmine.createSpy(),
    toggleIngredient: jasmine.createSpy(),
  };

  beforeEach(async () => {
    shoppingListServiceMock.isIngredientChecked.and.returnValue(true);
    shoppingListServiceMock.toggleIngredient.and.resolveTo();

    await TestBed.configureTestingModule({
      imports: [ShoppingRecipeCardComponent],
      providers: [
        {
          provide: ShoppingListService,
          useValue: shoppingListServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingRecipeCardComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('recipe', recipeMock);
    fixture.componentRef.setInput('shoppingState', shoppingStateMock);

    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería exponer los ingredientes de la receta', () => {
    expect(component.ingredients()).toEqual(recipeMock.ingredients);
  });

  it('debería consultar si un ingrediente está marcado', () => {
    const result = component.isIngredientChecked(10);

    expect(shoppingListServiceMock.isIngredientChecked).toHaveBeenCalledWith(
      1,
      10,
    );
    expect(result).toBeTrue();
  });

  it('debería alternar un ingrediente', async () => {
    await component.toggleIngredient({} as Event, 20);

    expect(shoppingListServiceMock.toggleIngredient).toHaveBeenCalledWith(
      1,
      20,
    );
  });
});
