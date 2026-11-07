import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { CondutaComponent } from './pages/conduta/conduta.component';


const routes: Routes = [
  {
    path: 'conduta',
    component: CondutaComponent
  },
  {
    path: '',
    component: StartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }),
    MatDialogModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
