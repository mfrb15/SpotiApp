import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
  loading: boolean;
  artist: any = {};
  topTracks: any [] = [];

  constructor(private router: ActivatedRoute,
    private spotify: SpotifyService) {
      this.loading = true;

    this.router.params.subscribe(params => {
      this.getArtist(params ['id']);
      this.getTopTracks(params ['id']);
      console.log(params['id']);

    })
  }


  getArtist(id: string) {
    this.spotify.getArtist(id)
      .subscribe(artist => {
        this.artist = artist
        this.loading = false;
        console.log(this.loading = false, 'soy loading')
        console.log(artist,'soy yoooooo')
      });
  }

  getTopTracks( id: string ){
    this.spotify.getTopTracks( id )
    .subscribe( topTracks => {
      this.topTracks = topTracks;
      console.log(topTracks, 'topTracks');
    });
  }

}


