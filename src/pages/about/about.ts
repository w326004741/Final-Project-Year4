import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(private streamingMedia: StreamingMedia,public navCtrl: NavController) {

  }
  playAudio(){
    let options: StreamingAudioOptions = {
      successCallback: () => {console.log('Finished Audio')},
      errorCallback: (e) => {console.log('Error: ', e)},
      initFullscreen: false, // IOS only!
    };
    this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/%E5%90%B4%E4%BA%A6%E5%87%A1%20-%20JULY.mp3', options);
  }

  stopAudio(){
    this.streamingMedia.stopAudio();
  }
}
