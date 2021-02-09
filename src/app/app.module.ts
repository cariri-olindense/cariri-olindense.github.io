import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogShirtComponent } from './pages/start/components/dialog-shirt/dialog-shirt.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DialogShirtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogShirtComponent
  ]
})
export class AppModule { }
