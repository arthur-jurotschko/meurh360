import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroEmpresaService } from '../../services/cadastro-empresa.service';


@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent {
cadastroEmpresaForm = new FormGroup({
  nomeEmpresa: new FormControl('', Validators.required),
  cnpj: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)]),
  endereco: new FormControl('', Validators.required),
  telefone: new FormControl('', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)])
});


  constructor(private cadastroService: CadastroEmpresaService, private router: Router) {}

  onSubmit() {
    if (this.cadastroEmpresaForm.valid) {
      this.cadastroService.setCadastroConcluido(); // Atualiza status do cadastro
      this.router.navigate(['/dashboard']); // Redireciona após cadastro
    } else {
      console.log('Erro: Preencha corretamente os campos.');
    }
  }
}
