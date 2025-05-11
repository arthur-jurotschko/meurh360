import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  standalone: true,
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.css']
})
export class BoasVindasComponent {
  usuarioNome: string = 'Usuário';

  iniciarConfiguracao() {
    console.log('Iniciando configuração...');

  }
}
