import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiRestComponent } from './api-rest.component';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: ApiRestComponent},
];

@NgModule({
  declarations: [ApiRestComponent],
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
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ]
})
export class ApiRestModule { }
