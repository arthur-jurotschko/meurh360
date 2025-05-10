import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroEmpresaService {
  private empresaCadastrada = false;

  setCadastroConcluido() {
    this.empresaCadastrada = true;
  }

  isCadastroConcluido(): boolean {
    return this.empresaCadastrada;
  }
}
