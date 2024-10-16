import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina404Component } from './pagina404.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';

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
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule, 
    MatPaginatorModule,
  ]
})
export class Pagina404Module { }
