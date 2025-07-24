import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidaturesComponent } from './candidatures.component';



@NgModule({
  declarations: [CandidaturesComponent],
  imports: [
    CommonModule
  ],
  exports: [CandidaturesComponent]
})
export class CandidaturesModule { }
