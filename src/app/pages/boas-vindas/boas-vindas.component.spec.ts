import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.css']
})
export class BoasVindasComponent {
  usuarioNome = 'Arthur'; // Aqui vamos substituir pela lógica real para pegar o nome do usuário

  constructor(private router: Router) {}

  iniciarConfiguracao() {
    this.router.navigate(['/cadastro-empresa']);
  }
}
