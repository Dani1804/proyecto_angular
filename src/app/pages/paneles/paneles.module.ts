import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelesComponent } from './paneles.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: PanelesComponent},
];

@NgModule({
  declarations: [
    PanelesComponent
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
    FormsModule, 
  ],
})
export class PanelesModule { }
