import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './core/components/homepage/homepage.component';
import { BadResponseComponent } from './core/components/badresponse/badresponse.component';
import { AuthService } from './core/services/auth.service';
import { DetalheOptimizacaoComponent } from './modules/optimizacao/components/detalhe-pedido/detalhe-pedido.component';


//with resolve
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', resolve: { user: AuthService }, },
  { path: 'optimizacao/detalhe_pedido/:id', component: DetalheOptimizacaoComponent,resolve: { user: AuthService }, },
  { path: 'home', component: HomePageComponent },
  { path: '500', component: BadResponseComponent },
  { path: '403', component: BadResponseComponent },
  { path: '404', component: BadResponseComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
