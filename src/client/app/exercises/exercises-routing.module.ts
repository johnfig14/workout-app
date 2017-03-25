import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExercisesComponent } from './exercises.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'exercises', component: ExercisesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class ExercisesRoutingModule { }
