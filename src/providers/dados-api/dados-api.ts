import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DadosApiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DadosApiProvider {

  private urlBaseApiPath = "https://api.themoviedb.org/3"
  
  constructor(public http: Http) {
    console.log('Acessado DadosApiProvider Provider');
  }

  getUltimosFilmes(){
    return this.http.get(this.urlBaseApiPath + "/movie/popular?api_key=" + this.getApiKey() + "&language=pt-BR");
  }

  getApiKey(): string{
     return  "72cad64f5c3a7c61e861423d4c33e8bb"
  }

}
