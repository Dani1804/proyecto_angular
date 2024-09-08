import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FormSettingsComponent } from './pages/form-settings/form-settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importante para Angular Material
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SplashComponent } from './pages/splash/splash.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EncuestaComponent,
    AccountSettingsComponent,
    FormSettingsComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
