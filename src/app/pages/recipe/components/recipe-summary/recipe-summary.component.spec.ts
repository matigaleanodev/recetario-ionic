import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeSummaryComponent } from './recipe-summary.component';
import { NavService } from '@shared/services/nav/nav.service';

describe('RecipeSummaryComponent', () => {
  let component: RecipeSummaryComponent;
  let fixture: ComponentFixture<RecipeSummaryComponent>;
  let navService: jasmine.SpyObj<NavService>;

  beforeEach(async () => {
    navService = jasmine.createSpyObj('NavService', ['forward']);

    await TestBed.configureTestingModule({
      imports: [RecipeSummaryComponent],
      providers: [{ provide: NavService, useValue: navService }],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSummaryComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse', () => {
    fixture.componentRef.setInput('summary', '<p>test</p>');
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('debería reemplazar links externos por rutas internas', () => {
    fixture.componentRef.setInput(
      'summary',
      '<a href="https://spoonacular.com/recipes/test-123">link</a>',
    );
    fixture.detectChanges();

    const result = component.sanitizedSummary();

    expect(result).toContain('/recipe/123');
  });

  it('debería navegar usando NavService al hacer click en un link interno', () => {
    fixture.componentRef.setInput(
      'summary',
      '<a href="https://spoonacular.com/recipes/test-999">link</a>',
    );
    fixture.detectChanges();

    const container: HTMLElement =
      fixture.nativeElement.querySelector('.recipe-summary');

    const anchor = container.querySelector('a') as HTMLAnchorElement;

    anchor.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true }),
    );

    expect(navService.forward).toHaveBeenCalledWith('/recipe/999');
  });
});
