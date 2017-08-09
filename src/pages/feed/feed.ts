import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nomeUsuario:string = "Ricardo Santiago Morais";
  public dataAtual:any = new Date();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaValor(valor1:number, valor2:number):number{

    let resultado:number;

    resultado = valor1 + valor2;

    // alert(resultado);
    return resultado;

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad FeedPage');
    this.somaValor(1, 99);
  }

}
