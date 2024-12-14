import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrl: './qr-dialog.component.css'
})
export class QrDialogComponent {
  qrData: string = ''; // Dato inicial para generar el código QR
  generatedQRCode: string = '';
 

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        // Asignamos la ruta recibida desde data.route
        if (data && data.route) {
          this.qrData = data.route; // Ahora qrData tendrá la ruta
        }
        this.generateQRCode(); // Llamamos la función para generar el QR
  }
  // Función para generar el código QR con el texto proporcionado
  generateQRCode() {
    this.generatedQRCode = this.qrData;
  }


  // Función para descargar el código QR como imagen
  downloadQRCode() {
    const qrCodeElement = document.querySelector('qrcode') as HTMLElement;
    html2canvas(qrCodeElement).then(canvas => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png'; // Nombre del archivo a descargar
      link.click();
    });
  }
}
