import { DadosApiProvider } from './../../providers/dados-api/dados-api';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    DadosApiProvider
  ]
})
export class FeedPage {

  public objeto_feed= {
    titulo: "Ricardo Santiago Morais",
    data_feed: new Date(),
    descricao: "DevOps é a reação à interdependência entre desenvolvimento de software e operações de TI. Pretende ajudar organizações a produzir software e serviços rapidamente. Empresas que liberam novas versões de software frequentemente podem precisar das considerações ou orientações de um DevOps",
    qtd_curtidas: 0,
    qtd_comentarios: 21,
    data_comentario: new Date()
  }

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
     public actionSheetCtrl: ActionSheetController,
     public platform: Platform,
     private dadosApiProvider: DadosApiProvider
    ){}

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
     this.dadosApiProvider.getUltimosFilmes().subscribe(
       data => {
         const response = (data as any);
         const objeto_retorno = JSON.parse(response._body);
         console.log(objeto_retorno);
       },
        error => {
          console.log(error);
        }
      );
  }

}
