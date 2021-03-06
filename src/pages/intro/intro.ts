import { TabsPage } from '../tabs/tabs';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

irParaTabsPage(){
    this.navCtrl.push(TabsPage);
}
irParaHomePage(){
    this.navCtrl.push(HomePage);
}
irParaFeedPage(){
    this.navCtrl.push(FeedPage);
}

}
