import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';

import { CadastroEmpresaModule } from '../pages/cadastro-empresa/cadastro-empresa.module';
import { CadastroModule } from '../pages/cadastro/cadastro.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CadastroModule,
    CadastroEmpresaModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
