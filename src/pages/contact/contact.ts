import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';
// import { Media, MediaObject } from '@ionic-native/media';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  // file: MediaObject;
  constructor(private streamingMedia: StreamingMedia, public navCtrl: NavController) {
  }
  
  startVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Finished Video')},
      errorCallback: (e) => {console.log('Error: ', e)},
      orientation: 'portrait'
    };
    this.streamingMedia.playVideo('https://www.youtube.com/watch?v=HjxYvcdpVnU', options);
  }
  startAudio(){
    let options: StreamingAudioOptions = {
      successCallback: () => {console.log('Finished Audio')},
      errorCallback: (e) => {console.log('Error: ', e)},
      initFullscreen: false, // IOS only!
    };
    this.streamingMedia.playAudio('www/https://open.spotify.com/user/spotify/playlist/37i9dQZF1DXcDoDDetPsEg', options);
  }
  
  stopAudio(){
    this.streamingMedia.stopAudio();
  }
  
  
  
}
// startAudio() {
  //   this.file.play();
  // }
  
  
  
  // this.file = this.media.create('/Users/weichenwang/Year4/Final-Project-Year4/src/assets/songs/song1.mp3');
  // this.file.onStatusUpdate.subscribe(status => console.log(status));
  // this.file.onSuccess.subscribe(() => console.log('Action is successful!'));
  // this.file.onError.subscribe(error => console.log('Error!', error));