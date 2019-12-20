import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Keyboard } from "@ionic-native/keyboard/ngx";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, null) slides: IonSlides;

  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  // public userLogin: User = {};
  // public userRegister: User = {};
  private loading: any;

  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }


}
