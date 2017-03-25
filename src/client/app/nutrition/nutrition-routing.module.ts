import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NutritionComponent } from './nutrition.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'nutrition', component: NutritionComponent }
    ])
  ],
  exports: [RouterModule]
})
export class NutritionRoutingModule { }
