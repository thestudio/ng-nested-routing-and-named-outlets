import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceLinksComponent } from './reference-links/reference-links.component';
import { ManagementLinksComponent } from './management-links/management-links.component';



@NgModule({
  declarations: [ReferenceLinksComponent, ManagementLinksComponent],
  imports: [
    CommonModule
  ]
})
export class HelpfulInfoModule { }
