import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelHomeComponent } from './marvel-home/marvel-home.component';
import { RouterModule } from '@angular/router';
import { MarvelLayoutComponent } from './marvel-layout/marvel-layout.component';



@NgModule({
  declarations: [MarvelHomeComponent, MarvelLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MarvelModule { }
