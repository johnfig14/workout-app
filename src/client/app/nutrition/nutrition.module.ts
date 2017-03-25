import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionComponent } from './nutrition.component';
import { NutritionRoutingModule } from './nutrition-routing.module';

@NgModule({
  imports: [CommonModule, NutritionRoutingModule],
  declarations: [NutritionComponent],
  exports: [NutritionComponent]
})
export class NutritionModule { }
