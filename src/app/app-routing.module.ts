import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';
import { LicenciasVigentesComponent } from './pages/licencias-vigentes/licencias-vigentes.component';
import { LoginComponent } from './pages/login/login.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "", component: DashboardComponent },
	{ path: 'alta-titular', component: AltaTitularComponent },
	{ path: 'licencias-vigentes', component: LicenciasVigentesComponent },
	{ path: '**', redirectTo: '/' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
