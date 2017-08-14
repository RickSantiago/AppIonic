import { NgFor } from '@angular/common/src/directives/ng_for_of';
import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { DadosApiProvider } from '../../providers/dados-api/dados-api';


@Component({
  templateUrl: 'tabs.html',
  providers: [
    DadosApiProvider
  ]
})


export class TabsPage {

  public qtdArrayObjetos = new Array<any>();

  tab1Root = HomePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  tab4Root = FeedPage;

  constructor(
      private qtdObjeto: DadosApiProvider
  ) {}

ionViewDidLoad() {
     //realizar chamadas ao carregar a pagina caso necessario
     this.qtdObjeto.getUltimosFilmes().subscribe(

       data => {

            const response = (data as any);
            const objeto_retorno = JSON.parse(response._body);

            this.qtdArrayObjetos = objeto_retorno.results;
          
       },
        error => {
            console.log(error);
        });
  }
}
