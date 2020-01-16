import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
// import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Keyboard } from "@ionic-native/keyboard/ngx";
import { User } from "../../../app/interfaces/user";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides, null) slides: IonSlides;

  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;

  constructor(
    public keyboard: Keyboard,
    private authService: AuthService,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  // segmentChanged(event: any) {
  //   if (event.detail.value === 'login') {
  //     this.slides.slidePrev();
  //     this.wavesPosition += this.wavesDifference;
  //   } else {
  //     this.slides.slideNext();
  //     this.wavesPosition -= this.wavesDifference;
  //   }
  // }

  // async login(){
  //   await this.presentLoading();
  //   try {
  //     await this.authService.login(this.userLogin);
  //   } catch (error) {
  //     console.log(error);
  //     let  message = '';
  //     if(error.code == 'auth/user-not-found'){
  //       message = 'Usuário invalido'
  //     }else{
  //       message = error.message;
  //     }

  //     this.presentToast(message);
  //   }finally{
  //     this.loading.dismiss(); //tirar o loading da tela
  //   }
  // }

  // async register(){
  //   await this.presentLoading();
  //   try {
  //     await this.authService.register(this.userRegister);
  //   } catch (error) {
  //     console.log(error);
  //     this.presentToast(error.message);
  //   }finally{
  //     this.loading.dismiss(); //tirar o loading da tela
  //   }
  // }

  // async presentLoading() {
  //   this.loading = await this.loadingController.create({
  //     message: 'Por favor, aguarde...',
  //     // duration: 2000
  //   });
  //   return this.loading.present();
  // }

  // async presentToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration: 2000
  //   });
  //   toast.present();
  // }

}
