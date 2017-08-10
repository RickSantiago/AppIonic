import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Ricardo Santiago Morais";
  public dataAtual:any = new Date();
  public curtidas:number = 0;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public actionSheetCtrl: ActionSheetController,
     public platform: Platform,
    ){ }

  /*public somaValor(valor1:number, valor2:number):number{

    let resultado:number;

    resultado = valor1 + valor2;

    alert(resultado);
    return resultado;

  }*/

  tapEvent(e) {
    this.curtidas++
  }
  
   abrirMenu() {

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Mais Opções',
      buttons: [
        {
         text: 'Excluir',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
         text: 'Compartilhar',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
         {
          text: 'Favorito',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    //this.somaValor(1, 99);
  }

}
