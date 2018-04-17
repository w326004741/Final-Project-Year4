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
    this.streamingMedia.playVideo('file:///Users/weichenwang/Downloads/Leave%20out%20all%20the%20rest.MOV', options);
  }
  startAudio(){
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
// startAudio() {
  //   this.file.play();
  // }
  
  
  
  // this.file = this.media.create('/Users/weichenwang/Year4/Final-Project-Year4/src/assets/songs/song1.mp3');
  // this.file.onStatusUpdate.subscribe(status => console.log(status));
  // this.file.onSuccess.subscribe(() => console.log('Action is successful!'));
  // this.file.onError.subscribe(error => console.log('Error!', error));