import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)
    this.showIMC()
  }

  async showIMC() {
    if (this.imc < 18.5){
      const toast = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(5)} Magreza`,
        duration: 3000,
        color: 'secondary'
      })
      
      toast.present()
    }
    if (this.imc > 18.5 && this.imc <24.9){
      const toast = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(5)} Normal`,
        duration: 3000,
        color: 'secondary'
      })
      
      toast.present()
    }
    if (this.imc > 25.0 && this.imc <29.9){
      const toast = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(5)} Sobrepeso`,
        duration: 3000,
        color: 'secondary'
      })
      
      toast.present()
    }
    if (this.imc > 30.0 && this.imc <39.9){
      const toast = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(5)} Obesidade`,
        duration: 3000,
        color: 'secondary'
      })
      
      toast.present()
    }
    if (this.imc > 40.0){
      const toast = await this.toastCtrl.create({
        message: `IMC = ${this.imc.toFixed(5)} Obesidade Grave`,
        duration: 3000,
        color: 'secondary'
      })
      
      toast.present()
    }
   //const toast = await this.toastCtrl.create({
   //   message: `IMC = ${this.imc.toFixed(5)} Normal`,
     // duration: 3000,
    //  color: 'secondary'
    //})
    
  //  toast.present()

  }


}
