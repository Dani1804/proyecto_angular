import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FormSettingsComponent } from './pages/form-settings/form-settings.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '' },
  { path: 'account-settings', component: AccountSettingsComponent },  // Configuración de cuenta
  { path: 'form-settings', component: FormSettingsComponent },
  { path: 'encuesta', component: EncuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
