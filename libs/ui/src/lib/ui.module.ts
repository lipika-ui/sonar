import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, MatTabsModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class UiModule {}
