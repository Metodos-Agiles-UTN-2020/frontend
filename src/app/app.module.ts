import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './interface/header/header.component';
import { FooterComponent } from './interface/footer/footer.component';
import { AltaTitularComponent } from './pages/alta-titular/alta-titular.component';
import { AltaLicenciaComponent } from './pages/alta-licencia/alta-licencia.component';
import { LicenciasVigentesComponent } from './pages/licencias-vigentes/licencias-vigentes.component';
import { LicenciasExpiradasComponent } from './pages/licencias-expiradas/licencias-expiradas.component';
import { ModificarTitularComponent } from './pages/modificar-titular/modificar-titular.component';
import { ModificarUsuarioComponent } from './pages/modificar-usuario/modificar-usuario.component';
import { AltaUsuarioComponent } from './pages/alta-usuario/alta-usuario.component';
import esAr from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(esAr);

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent,
		HeaderComponent,
		FooterComponent,
		AltaTitularComponent,
		AltaLicenciaComponent,
		LicenciasVigentesComponent,
		LicenciasExpiradasComponent,
		ModificarTitularComponent,
		ModificarUsuarioComponent,
		AltaUsuarioComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SuiModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: "es-AR" }, //your locale
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
