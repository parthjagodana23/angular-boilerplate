import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { PermissionDirective } from './directives/permission.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [FilterPipe, PermissionDirective, LoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent],
})
export class SharedModule {}
