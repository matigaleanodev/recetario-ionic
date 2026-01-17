import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimilarPage } from './similar.page';

describe('SimilarPage', () => {
  let component: SimilarPage;
  let fixture: ComponentFixture<SimilarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
