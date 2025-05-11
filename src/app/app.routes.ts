import { Routes } from '@angular/router';
import { BoasVindasComponent } from './pages/boas-vindas/boas-vindas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CadastroEmpresaComponent } from './pages/cadastro-empresa/cadastro-empresa.component';

export const routes: Routes = [
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cadastro-empresa', component: CadastroEmpresaComponent },
  { path: '', redirectTo: '/boas-vindas', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/boas-vindas' } // Redireciona para Boas-Vindas se a rota não existir
];
