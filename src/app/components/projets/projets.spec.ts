import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projets } from './projets';

describe('Projets', () => {
  let component: Projets;
  let fixture: ComponentFixture<Projets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projets],
    }).compileComponents();

    fixture = TestBed.createComponent(Projets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 projects', () => {
    expect(component.projets.length).toBe(3);
  });

  it('should have Mission Tracker as first project', () => {
    expect(component.projets[0].title).toBe('Mission Tracker');
  });
});
