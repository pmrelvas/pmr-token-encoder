import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenEncoderDecoderComponent } from './token-encoder-decoder/token-encoder-decoder.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TokenEncoderDecoderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
