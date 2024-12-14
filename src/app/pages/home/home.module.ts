import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';



const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { 
        path: 'paneles', 
        loadChildren: () => import('../paneles/paneles.module').then(m => m.PanelesModule)
      },
      { 
        path: 'encuesta', 
        loadChildren: () => import('../encuesta/encuesta.module').then(m => m.EncuestaModule)
      },

      { 
        path: 'account-settings', 
        loadChildren: () => import('../account-settings/account-settings.module').then(m => m.AccountSettingsModule)
      },
      { 
        path: 'usuariosfirebase', 
        loadChildren: () => import('../../componentes/usuariosfirebase/usuariosfirebase.module').then(m => m.UsuariosfirebaseModule)
      },
       {path: 'vistaEncuesta/:surveyId',
        loadChildren: () => import('../vista-encuesta/vista-encuesta.module').then(m => m.VistaEncuestaModule)
      },

      { path: '', redirectTo: 'paneles', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule, 
    MatPaginatorModule,
    FormsModule, 
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,

  ]
})
export class HomeModule { }
