import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaEncuestaComponent } from './vista-encuesta.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { QRCodeModule } from 'angularx-qrcode'; // Módulo para generar códigos QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: VistaEncuestaComponent },
];

@NgModule({
  declarations: [VistaEncuestaComponent],
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
    MatButtonModule, 
    MatDividerModule,
    MatDialogModule,
    QRCodeModule,
    ZXingScannerModule,
    MatCardModule,
  ]
})
export class VistaEncuestaModule { }
