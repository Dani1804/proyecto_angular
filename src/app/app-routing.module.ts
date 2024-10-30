import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './pages/pagina404/pagina404.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [
  { 
    path: 'splash', 
      component: SplashComponent },

  { path: '', redirectTo: 'splash', pathMatch: 'full' },  // Redirige la ruta vacía al splash
  { 
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: 'login', 
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'account-settings', 
    loadChildren: () => import('./pages/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
   },  
  { 
    path: 'encuesta', 
    loadChildren: () => import('./pages/encuesta/encuesta.module').then(m => m.EncuestaModule)
   },
   { 
    path: 'generarQR', 
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then(m => m.GenerarQRModule)
   },

  { 
    path: 'reestablecer', 
    loadChildren: () => import('./pages/reestablecer-pass/reestablecer-pass.module').then(m => m.ReestablecerPassModule)
    },
  { 
    path: 'paneles', 
    loadChildren: () => import('./pages/paneles/paneles.module').then(m => m.PanelesModule) 
  },
  { 
    path: 'pagina404', 
    loadChildren: () => import('./pages/pagina404/pagina404.module').then(m => m.Pagina404Module) 
  },
  { path: '**', component: Pagina404Component }  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
