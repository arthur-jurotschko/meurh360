import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroEmpresaComponent } from './cadastro-empresa.component';

@NgModule({
  declarations: [CadastroEmpresaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CadastroEmpresaComponent]
})
export class CadastroEmpresaModule { }
