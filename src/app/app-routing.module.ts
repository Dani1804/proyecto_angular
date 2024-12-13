import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { SplashComponent } from './pages/splash/splash.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard] // Protege la ruta home
  },
  { 
    path: 'vistaEncuesta/:surveyId', 
    loadChildren: () => import('./pages/vista-encuesta/vista-encuesta.module').then(m => m.VistaEncuestaModule)
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'reestablecer', loadChildren: () => import('./pages/reestablecer-pass/reestablecer-pass.module').then(m => m.ReestablecerPassModule) },
  { path: 'pagina404', component: Pagina404Component },
  { path: '**', redirectTo: 'pagina404' }  // Redirige rutas no encontradas a la página 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }