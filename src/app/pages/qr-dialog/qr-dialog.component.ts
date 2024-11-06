import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrl: './qr-dialog.component.css'
})
export class QrDialogComponent {
  qrData: string = 'https://angular.io'; // Dato inicial para generar el código QR
  generatedQRCode: string = '';
  scanResult: string = '';

  constructor() {}
  // Función para generar el código QR con el texto proporcionado
  generateQRCode() {
    this.generatedQRCode = this.qrData;
  }

  // Función para manejar el resultado del escaneo
  handleScanResult(result: string) {
    this.scanResult = result;

    // Validar si el resultado es una URL
    if (this.isValidUrl(result)) {
      console.log('Escaneado es una URL válida:', result);
      // Abrir la URL en una nueva pestaña
      window.open(result, '_blank'); // '_blank' abre en nueva pestaña
    } else {
      console.log('Escaneado no es una URL válida:', result);
    }
  }

  // Función para validar si el contenido escaneado es una URL
  isValidUrl(url: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocolo
      '((([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\.)+[a-z]{2,}|' + // dominio...
      'localhost|' + // localhost...
      '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // dirección IP...
      '\\[?[a-f0-9]*:[a-f0-9:]+\\]?)' + // dirección IPv6...
      '(\\:\\d+)?(\\/[-a-z0-9+&@#\\/%?=~_|!:,.;]*)*' + // ruta
      '(\\?[;&a-z0-9+%#=~_|]*)?' + // consulta
      '(\\#[-a-z0-9_]*)?$','i'); // fragmento
    return !!pattern.test(url);
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
