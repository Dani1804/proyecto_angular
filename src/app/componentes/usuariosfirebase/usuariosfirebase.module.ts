import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosfirebaseComponent } from './usuariosfirebase.component';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: UsuariosfirebaseComponent},
];



@NgModule({
  declarations: [UsuariosfirebaseComponent],
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
    MatInputModule
  ]
})
export class UsuariosfirebaseModule { }
