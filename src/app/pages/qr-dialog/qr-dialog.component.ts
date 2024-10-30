import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrl: './qr-dialog.component.css'
})
export class QrDialogComponent {
  qrCodeUrl: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<QrDialogComponent>
  ) {
    this.qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Math.random()}`;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
