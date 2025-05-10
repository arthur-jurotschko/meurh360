import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroEmpresaComponent } from './cadastro-empresa.component';

describe('CadastroEmpresaComponent', () => {
  let component: CadastroEmpresaComponent;
  let fixture: ComponentFixture<CadastroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroEmpresaComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled correctly', () => {
    component.cadastroEmpresaForm.setValue({
      nomeEmpresa: 'Empresa XYZ',
      cnpj: '12.345.678/0001-99',
      endereco: 'Rua das Empresas, 123',
      telefone: '(11) 98765-4321'
    });

    expect(component.cadastroEmpresaForm.valid).toBeTruthy();
  });

  it('should be invalid if required fields are missing', () => {
    component.cadastroEmpresaForm.setValue({
      nomeEmpresa: '',
      cnpj: '',
      endereco: '',
      telefone: ''
    });

    expect(component.cadastroEmpresaForm.valid).toBeFalsy();
  });

  it('should fail validation if CNPJ format is incorrect', () => {
    component.cadastroEmpresaForm.setValue({
      nomeEmpresa: 'Empresa ABC',
      cnpj: '12345678',
      endereco: 'Avenida Central, 456',
      telefone: '(11) 91234-5678'
    });

    expect(component.cadastroEmpresaForm.get('cnpj')?.valid).toBeFalsy();
  });
});
