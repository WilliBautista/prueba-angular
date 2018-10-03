import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  albums: any[] = [];
  name: string;
  image: string;
  href: string;


  constructor(private spotity: SpotifyService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');

    // Artist's information
    this.spotity.getInfoArtist(id)
      .subscribe( (response: any) => {
        this.name = response.name;
        this.image = response.images[2].url;
        this.href = response.external_urls.spotify;
      });

    // Artist's albums
    this.spotity.getAlbumsArtist(id)
      .subscribe( (response: any) => {
        this.albums = response;
        console.log(response);
      });
  }
}
