import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InicioComponent } from './inicio.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        InicioComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mi-web-app'`, () => {
    const fixture = TestBed.createComponent(InicioComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mi-web-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(InicioComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('mi-web-app app is running!');
  });
});
