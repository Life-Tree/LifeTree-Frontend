import { Injectable } from '@angular/core';
import { VideoPlayer } from '@awesome-cordova-plugins/video-player/ngx';
import {} from 'capacitor-video-player'

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private videoPlayer: VideoPlayer) { }

  play(url: string){
    this.videoPlayer.play(url).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
