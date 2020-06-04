import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvengersHomeComponent } from './avengers-home/avengers-home.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { EditIronManComponent } from './edit-iron-man/edit-iron-man.component';
import { RouterModule } from '@angular/router';
import { AvengersLayoutComponent } from './avengers-layout/avengers-layout.component';



@NgModule({
  declarations: [AvengersHomeComponent, IronManComponent, EditIronManComponent, AvengersLayoutComponent],
	imports: [
		CommonModule,
		RouterModule
	]
})
export class AvengersModule { }
