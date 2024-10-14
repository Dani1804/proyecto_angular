import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSettingsComponent } from './form-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';



const routes: Routes = [
  { path: '', component: FormSettingsComponent},
];
@NgModule({
  declarations: [FormSettingsComponent],
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
export class FormSettingsModule { }
