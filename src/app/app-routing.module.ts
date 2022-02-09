import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ExpositionComponent } from './pages/exposition/exposition.component';
import { StartComponent } from './pages/start/start.component';


const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'exposicao',
    component: ExpositionComponent
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
