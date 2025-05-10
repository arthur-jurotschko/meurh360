import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled correctly', () => {
    component.cadastroForm.setValue({
      nome: 'Arthur Silva',
      email: 'arthur@email.com',
      senha: 'senhaSegura123',
      termos: true
    });

    expect(component.cadastroForm.valid).toBeTruthy();
  });

  it('should be invalid if required fields are missing', () => {
    component.cadastroForm.setValue({
      nome: '',
      email: 'emailInvalido',
      senha: '',
      termos: false
    });

    expect(component.cadastroForm.valid).toBeFalsy();
  });
});
