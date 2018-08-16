import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from './material.module';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AnkietaService } from './services/ankieta.service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnkietaComponent } from './components/ankieta/ankieta.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AnkietaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  providers: [AnkietaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
