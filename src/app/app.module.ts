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
import { UsuariosfirebaseComponent } from './componentes/usuariosfirebase/usuariosfirebase.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    QrDialogComponent,
    UsuariosfirebaseComponent,

  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 

  ],  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CrudfirebaseService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


