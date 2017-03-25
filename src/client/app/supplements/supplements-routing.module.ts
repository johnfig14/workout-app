import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupplementsComponent } from './supplements.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'supplements', component: SupplementsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SupplementsRoutingModule { }
