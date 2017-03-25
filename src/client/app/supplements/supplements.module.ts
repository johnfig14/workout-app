import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplementsComponent } from './supplements.component';
import { SupplementsRoutingModule } from './supplements-routing.module';

@NgModule({
  imports: [CommonModule, SupplementsRoutingModule],
  declarations: [SupplementsComponent],
  exports: [SupplementsComponent]
})
export class SupplementsModule { }
