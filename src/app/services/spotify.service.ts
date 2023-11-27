import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private accessToken = 'BQCt6B2yvuyMV5Usqd--SQg7m1zIAWb86E0aFcfby5LvLM5v_9NbBkU-aBtP7xubum5S4rclgQp0ew5b_5_ba6Mys55WcdUSH72VceMubxcp2XC6Ruw';

  constructor(private http: HttpClient) {
    console.log('SpotifyService');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe(map((data: any) => data.albums.items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)

  }



  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?market=us`)
    .pipe(map((data: any) => data['tracks']));
  }
}
