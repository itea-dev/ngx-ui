import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayComponent } from './overlay.component';
import { OverlayService } from './overlay.service';
import { InjectionService } from '../../services/injection/injection.service';

@NgModule({
  declarations: [OverlayComponent],
  providers: [OverlayService, InjectionService, OverlayService],
  exports: [OverlayComponent],
  imports: [CommonModule],
  entryComponents: [OverlayComponent]
})
export class OverlayModule {}
