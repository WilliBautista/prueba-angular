import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { AlbumesComponent } from './components/pages/albumes/albumes.component';
import { ArtistComponent } from './components/pages/artist/artist.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'lanzamientos', component: AlbumesComponent },
  { path: 'artista/:id', component: ArtistComponent },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/inicio' }
];

@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
