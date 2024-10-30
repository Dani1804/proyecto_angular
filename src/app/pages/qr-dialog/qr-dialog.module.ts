import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { QrDialogComponent } from './qr-dialog.component';



@NgModule({
  declarations: [
    QrDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class QrDialogModule { }
