import { Component } from "@angular/core";
import { Video } from "./video"

@Component({
  selector: 'app-playlist',
  templateUrl: './video.component.html'
})

export class PlaylistComponent {
  videos: Array<Video>;

  constructor() {
    this.videos = [
      new Video(
          0,
          'media/videos/brooklyn to manhattan.mp4',
          'brooklyn to manhattan',
          '111',
          'Angular Art'),
      new Video(
          1,
          'media/videos/ny.mp4',
          'ny',
          '222',
          'Angular Art'),
      new Video(
          2,
          'media/videos/SanFrancisco.mp4',
          'SanFrancisco',
          '333',
          'Angular Art'),
    ];
  }
}
