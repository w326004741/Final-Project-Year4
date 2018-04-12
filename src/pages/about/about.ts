import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public streamingMedia: StreamingMedia,public navCtrl: NavController) {
  }

  play(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/%E5%90%B4%E4%BA%A6%E5%87%A1%20-%20JULY.mp3', options);

  }
  play1(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Charlie%20Puth%20-%20Attention.mp3', options);

  }
  play2(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Ed%20Sheeran%20-%20Galway%20Girl.mp3', options);

  }

  play3(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Ed%20Sheeran%20-%20Shape%20of%20You.mp3', options);

  }

  play4(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Ed%20Sheeran%20-%20What%20Do%20I%20Know%EF%BC%9F.mp3', options);

  }

  play5(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Russ%20-%20Psycho%20(Pt.%202).mp3', options);

  }

  play6(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Charlie%20Puth,Selena%20Gomez%20-%20We%20Dont%20Talk%20Anymore.mp3', options);
  }

  play7(){
    let options: StreamingAudioOptions = {
    successCallback: () => {console.log('Finished Audio')},
    errorCallback: (e) => {console.log('Error: ', e)},
    initFullscreen: false, // IOS only!
  };
  this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/Linkin%20Park%20-%20Leave%20Out%20All%20the%20Rest%20(One%20More%20Light%20Live).mp3', options);
  }

  stop(){
    this.streamingMedia.stopAudio();
  }


}

// playAudio(){
//   let options: StreamingAudioOptions = {
//     successCallback: () => {console.log('Finished Audio')},
//     errorCallback: (e) => {console.log('Error: ', e)},
//     initFullscreen: false, // IOS only!
//   };
//   this.streamingMedia.playAudio('file:///Users/weichenwang/Music/%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90/%E5%90%B4%E4%BA%A6%E5%87%A1%20-%20JULY.mp3', options);
// }

// stopAudio(){
//   this.streamingMedia.stopAudio();
// }