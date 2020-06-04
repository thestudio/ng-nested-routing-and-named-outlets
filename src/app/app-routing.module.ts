import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsHomeComponent } from './modules/comics/comics-home/comics-home.component';
import { MarvelHomeComponent } from './modules/marvel/marvel-home/marvel-home.component';
import { AvengersHomeComponent } from './modules/avengers/avengers-home/avengers-home.component';
import { IronManComponent } from './modules/avengers/iron-man/iron-man.component';
import { ComicsLayoutComponent } from './modules/comics/comics-layout/comics-layout.component';
import { MarvelLayoutComponent } from './modules/marvel/marvel-layout/marvel-layout.component';
import { AvengersLayoutComponent } from './modules/avengers/avengers-layout/avengers-layout.component';
import { EditIronManComponent } from './modules/avengers/edit-iron-man/edit-iron-man.component';
import { ReferenceLinksComponent } from './modules/helpful-info/reference-links/reference-links.component';
import { ManagementLinksComponent } from './modules/helpful-info/management-links/management-links.component';


const routes: Routes = [
  {
    path: 'comics',
    component: ComicsLayoutComponent,
    children: [
      { path: '', redirectTo: '/comics/home(rightHandPanel:reference-links)', pathMatch: 'full'},
      { path: 'home', component: ComicsHomeComponent },
      { path: 'reference-links', component: ReferenceLinksComponent, outlet: 'another' },
      {
        path: 'marvel',
        component: MarvelLayoutComponent,
        children: [
          { path: '', component: MarvelHomeComponent },
          {
            path: 'avengers',
            component: AvengersLayoutComponent,
            children: [
              { path: '', component: AvengersHomeComponent },
              { path: 'iron-man', component: IronManComponent },
            ]
          },
        ]
      }
    ],
  },
  { path: 'edit-iron-man', component: EditIronManComponent, outlet: 'rightHandPanel' },
  { path: 'management-links', component: ManagementLinksComponent, outlet: 'another' },
  { path: 'reference-links', component: ReferenceLinksComponent, outlet: 'rightHandPanel' },
  { path: 'reference-links', component: ReferenceLinksComponent, outlet: 'another' },
  { path: '', redirectTo: 'comics', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
