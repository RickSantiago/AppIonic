import { Injectable } from '@angular/core';

let config_KEY_name = "config";

@Injectable()
export class ConfigProvider {
  
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {}

  //recupera dados do localstorage
  getConfigDados(): any{
      return localStorage.getItem(config_KEY_name);
  }

  //modifica dados do localstorage
  setConfigDados(showSlide?: boolean, name?: string, username?: string){

      let config = {
      showSlide: false,
      name: "",
      username: ""
    }
  
      if(showSlide){
        config.showSlide = showSlide
      }
      if(name){
        config.name = name
      }
      if(username){
        config.username = username
      }

      localStorage.setItem(config_KEY_name, JSON.stringify(config));
  }

}
