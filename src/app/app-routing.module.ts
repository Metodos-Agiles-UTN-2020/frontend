import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';

const routes: Routes = [
  {path: 'alta-titular', component: AltaTitularComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
