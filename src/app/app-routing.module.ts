import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenEncodeComponent } from './token-encode/token-encode.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'encode'
  },
  {
    path: 'encode',
    component: TokenEncodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
