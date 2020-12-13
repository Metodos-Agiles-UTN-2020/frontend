import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
		LoginComponent,
		DashboardComponent,
		HeaderComponent,
		FooterComponent,
    AltaTitularComponent,
    AltaLicenciaComponent,
    LicenciasVigentesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
