import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) {}
  // News álbumes
  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDfXrTxjAQJpYuem7J-k29tCk2TIS6_KGTc6oZxBgsbGG2srgb727rzB10hBLMqZd2vGxvxQnSeBV_s72s'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  // Artist with id
  getInfoArtist(id: string) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDfXrTxjAQJpYuem7J-k29tCk2TIS6_KGTc6oZxBgsbGG2srgb727rzB10hBLMqZd2vGxvxQnSeBV_s72s'
    });

    return this.http.get('https://api.spotify.com/v1/artists/' + id, { headers });
  }

  // Artist with id
  getAlbumsArtist(id: string) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDfXrTxjAQJpYuem7J-k29tCk2TIS6_KGTc6oZxBgsbGG2srgb727rzB10hBLMqZd2vGxvxQnSeBV_s72s'
    });

    return this.http.get('https://api.spotify.com/v1/artists/' + id + '/albums?limit=10', { headers })
                    .pipe( map( albums => {
                      return albums['items'];
                    }));
  }

}
