import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		DashboardComponent
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
