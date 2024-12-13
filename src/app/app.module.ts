import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { SplashComponent } from './pages/splash/splash.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { QrDialogComponent } from './pages/qr-dialog/qr-dialog.component';
import { CrudfirebaseService } from './servicios/crudfirebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode'; // Módulo para generar códigos QR
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    QrDialogComponent,
    
    

  

  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    QRCodeModule,
    ZXingScannerModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,

  ],  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CrudfirebaseService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


