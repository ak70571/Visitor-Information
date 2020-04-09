import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  constructor(private loadingController: LoadingController,public alertController: AlertController) { }

  async loadingPresent(message: string = null, duration: number = null) {
    const loading = await this.loadingController.create({ message, duration });
    return await loading.present();
  }

  async loadingDismiss() {
    setTimeout(() => {
        return this.loadingController.dismiss();
    }, 500);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Data Stored Successfully.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
