import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { PermissionDirective } from './directives/permission.directive';


@NgModule({
  declarations: [
    FilterPipe,
    PermissionDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
