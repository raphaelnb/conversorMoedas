import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListaMoedasComponent } from './components/lista-moedas/lista-moedas.component';

const routes: Routes = [
  {'path': 'home', component: HomeComponent},
  {'path': 'lista', component: ListaMoedasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
