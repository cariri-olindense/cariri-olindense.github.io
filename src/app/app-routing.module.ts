import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';


const routes: Routes = [
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
