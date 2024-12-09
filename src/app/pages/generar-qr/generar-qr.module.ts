import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerarQRComponent } from './generar-qr.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { QRCodeModule } from 'angularx-qrcode'; // Módulo para generar códigos QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: GenerarQRComponent},
];

@NgModule({
  declarations: [ GenerarQRComponent],
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
    MatDialogModule,
    MatButtonModule,
    QRCodeModule,
    ZXingScannerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    
  ]
})
export class GenerarQRModule { }
