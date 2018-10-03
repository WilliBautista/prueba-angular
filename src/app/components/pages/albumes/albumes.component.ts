import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styles: []
})
export class AlbumesComponent {

  newAlbums: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
      .subscribe( (response: any) => {
        this.newAlbums = response.albums.items;
        console.log(this.newAlbums);
      });
  }
}
