import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { RouterModule } from '@angular/router';
import { ComicsLayoutComponent } from './comics-layout/comics-layout.component';



@NgModule({
  declarations: [ComicsHomeComponent, ComicsLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComicsModule { }
