import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('section h3').textContent).toContain('Trabalhadores afastados por doença:');
  });

  it(`should return a array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(Array.isArray(app.getTrabalhadoresAfastadosPorDoenca())).toBe(true);
  });

  it(`should return at least one worker as total`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getTotalDeTrabalhadores()).toBeGreaterThan(0);
  });

  it(`should not total away workers be greater than total workers`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getTrabalhadoresAfastadosPorDoenca().length).toBeLessThanOrEqual(app.getTotalDeTrabalhadores());
  });
});
