import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina404Component } from './pagina404.component';
import { RouterModule, Routes } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importante para Angular Material
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  { path: '', component: Pagina404Component}
]


@NgModule({
  declarations: [
    Pagina404Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule, 
    MatPaginatorModule,
  ]
})
export class Pagina404Module { }
