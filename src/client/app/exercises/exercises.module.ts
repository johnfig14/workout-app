import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises.component';
import { ExercisesRoutingModule } from './exercises-routing.module';

@NgModule({
  imports: [CommonModule, ExercisesRoutingModule],
  declarations: [ExercisesComponent],
  exports: [ExercisesComponent]
})
export class ExercisesModule { }
