import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];
