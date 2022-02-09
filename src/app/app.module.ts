import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogShirtComponent } from './pages/start/components/dialog-shirt/dialog-shirt.component';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { ExpositionComponent } from './pages/exposition/exposition.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DialogShirtComponent,
    ExpositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogShirtComponent
  ]
})
export class AppModule { }
