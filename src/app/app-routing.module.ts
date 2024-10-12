import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FormSettingsComponent } from './pages/form-settings/form-settings.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { SplashComponent } from './pages/splash/splash.component';
import { ReestablecerPassComponent } from './pages/reestablecer-pass/reestablecer-pass.component';
import { PanelesComponent } from './pages/paneles/paneles.component';
import { Pagina404Component } from './pages/pagina404/pagina404.component';

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },  // Redirige la ruta vacía al splash
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account-settings', component: AccountSettingsComponent },  // Configuración de cuenta
  { path: 'form-settings', component: FormSettingsComponent },
  { path: 'encuesta', component: EncuestaComponent },
  { path: 'reestablecer', component: ReestablecerPassComponent },
  { path: 'paneles', component: PanelesComponent },
  { 
    path: 'pagina404', 
    loadChildren: () => import('./pages/pagina404/pagina404.module').then(m => m.Pagina404Module) 
  },
  { path: '**', component: Pagina404Component }  // Redirige cualquier ruta no encontrada a la página 404
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
