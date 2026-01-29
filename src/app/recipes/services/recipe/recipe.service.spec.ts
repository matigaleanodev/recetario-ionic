import { TestBed } from '@angular/core/testing';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeService],
    });

    service = TestBed.inject(RecipeService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería generar una lista de recetas', () => {
    const recipes = service.recipes();

    expect(recipes.length).toBeGreaterThan(0);
  });

  it('debería generar 12 recetas', () => {
    const recipes = service.recipes();

    expect(recipes.length).toBe(12);
  });

  it('cada receta debería tener id y título', () => {
    const recipes = service.recipes();

    recipes.forEach((recipe) => {
      expect(recipe.sourceId).toBeDefined();
      expect(recipe.title).toBeDefined();
    });
  });
});
