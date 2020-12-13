import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';
import { AltaLicenciaComponent } from './pages/alta-licencia/alta-licencia.component';
import { LicenciasVigentesComponent } from './pages/licencias-vigentes/licencias-vigentes.component';
import { LicenciasExpiradasComponent } from './pages/licencias-expiradas/licencias-expiradas.component';
import { ModificarTitularComponent } from './pages/modificar-titular/modificar-titular.component';
import { ModificarUsuarioComponent } from './pages/modificar-usuario/modificar-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'alta-titular', component: AltaTitularComponent },
  { path: 'alta-licencia', component: AltaLicenciaComponent },
  { path: 'licencias-vigentes', component: LicenciasVigentesComponent },
  { path: 'licencias-expiradas', component: LicenciasExpiradasComponent },
  { path: 'modificar-titular', component: ModificarTitularComponent },
  { path: 'modificar-usuario', component: ModificarUsuarioComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
