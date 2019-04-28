export class Video {
  id: number;
  url: string;
  title: string;
  videoCode: string;
  desc: string;

  constructor(id: number, url: string, title: string, videoCode: string, desc: string) {
    this.id = id;
    this.url = url;
    this.title = title;
    this.videoCode = videoCode;
    this.desc = desc;
  }
}
