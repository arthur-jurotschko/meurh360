import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    termos: new FormControl(false, Validators.requiredTrue)
  });

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Cadastro realizado!', this.cadastroForm.value);
    } else {
      console.log('Erro: Preencha corretamente os campos.');
    }
  }
}
