import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  // public nomeUsuario:string = "Ricardo Santiago Morais";
  // public dataAtual:any = new Date();
  // public curtidas:number = 0;

  public objeto_feed= {
    titulo: "Ricardo Santiago Morais",
    data_feed: new Date(),
    descricao: "DevOps é a reação à interdependência entre desenvolvimento de software e operações de TI. Pretende ajudar organizações a produzir software e serviços rapidamente. Empresas que liberam novas versões de software frequentemente podem precisar das considerações ou orientações de um DevOps",
    qtd_curtidas: 0,
    qtd_comentarios: 0,
    data_comentario: new Date()
  }

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
    this.objeto_feed.qtd_curtidas++
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
            console.log('Excluir clicado');
          }
        },
        {
         text: 'Compartilhar',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Compartilhar clicado');
          }
        },
         {
          text: 'Editar',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Editar clicado');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancelar clicado');
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
     //realizar chamadas ao carregar a pagina caso necessario
  }

}
