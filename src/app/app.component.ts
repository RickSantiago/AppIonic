import { TabsPage } from './../pages/tabs/tabs';
import { ConfigProvider } from './../providers/config/config';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {

  rootPage:any;
  

  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configProvider: ConfigProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      let config = configProvider.getConfigDados();

      //se for a primeira vez que abriu o app os dados sao nullos portanto recebe a pagina de introdução
      if(config == null){
        this.rootPage = IntroPage;
        configProvider.setConfigDados(false);
      }
      //se nao recebe direito a pagina de Tabs onde possui o menu, pulando o tutorial
      else{
        this.rootPage = TabsPage;
      }

      console.log(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
