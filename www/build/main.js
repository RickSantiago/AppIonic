webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the IntroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.irParaTabsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
    };
    return IntroPage;
}());
IntroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-intro',template:/*ion-inline-start:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n\n    <ion-navbar color="dark">\n        <ion-title>Intro</ion-title>\n    </ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content>\n    <ion-slides pager>\n        <ion-slide class="slide_image">\n            <!--<ion-buttons end>\n                <button (click)="irParaTabsPage()" ion-button outline>Pular</button>\n            </ion-buttons>-->\n            <img src="assets/img/ica-slidebox-img-1.png" alt="inicio">\n            <h2><strong>Olá, Bem vindo(a)!</strong></h2>\n            <div>\n                <p padding>Esse é o App do <strong>Homão da Porra</strong>, vamos ver o que rola por aqui?</p>\n\n            </div>\n        </ion-slide>\n\n        <ion-slide class="slide_image">\n            <img src="assets/img/ica-slidebox-img-2.png" alt="inicio">\n            <h2><strong>Homão da Porra</strong></h2>\n            <p padding>Nesse App, voce pode se tornar um, ser um e mostrar pra galera que voce é um Homão. </p>\n            <p padding>A idéia é simples, voce poderá realizar atividades, com ou sem sugestões e uma outra pessoa irá valida-la, tudo isso para tornar seus dados honestos.\n            </p>\n        </ion-slide>\n\n        <ion-slide class="slide_image">\n            <img src="assets/img/ica-slidebox-img-3.png" alt="inicio">\n            <h2><strong>Como confiar nos dados?</strong></h2>\n            <p padding>Todas as atividades que voce realizar deve ter uma comprovação, seja uma imagem sua compartilhada ou até mesmo alguem para validar suas atividades, gostariamos muito que fosse alguem que participou ou foi a pessoa solicitante ou beneficiada\n                da atividades.\n            </p>\n            <!--<a >Vamos lá!</a>-->\n            <button (click)="irParaTabsPage()" ion-button large clear icon-end color="primary">\n               Vamos lá!\n             <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/intro/intro.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
], IntroPage);

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';


var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        // tab2Root = AboutPage;
        // tab3Root = ContactPage;
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="md-home"></ion-tab>\n    <!--<ion-tab [root]="tab2Root" tabTitle="Sobre" tabIcon="md-information-circle"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Contato" tabIcon="md-contacts"></ion-tab>-->\n    <ion-tab [root]="tab4Root" tabTitle="Feed" tabIcon="md-paper"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Inicio</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h2>Bem vindo ao AppIonic</h2>\n    <p>\n        Pagina inicial do aplicativo.\n    </p>\n    <p>\n        Take a look at the <code>src/pages/</code> directory to add or change tabs, update any existing page or create new pages.\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedPage = (function () {
    function FeedPage(navCtrl, navParams, actionSheetCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        // public nomeUsuario:string = "Ricardo Santiago Morais";
        // public dataAtual:any = new Date();
        // public curtidas:number = 0;
        this.objeto_feed = {
            titulo: "Ricardo Santiago Morais",
            data_feed: new Date(),
            descricao: "DevOps é a reação à interdependência entre desenvolvimento de software e operações de TI. Pretende ajudar organizações a produzir software e serviços rapidamente. Empresas que liberam novas versões de software frequentemente podem precisar das considerações ou orientações de um DevOps",
            qtd_curtidas: 0,
            qtd_comentarios: 0,
            data_comentario: new Date()
        };
    }
    /*public somaValor(valor1:number, valor2:number):number{
  
      let resultado:number;
  
      resultado = valor1 + valor2;
  
      alert(resultado);
      return resultado;
  
    }*/
    FeedPage.prototype.tapEvent = function (e) {
        this.objeto_feed.qtd_curtidas++;
    };
    FeedPage.prototype.abrirMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Mais Opções',
            buttons: [
                {
                    text: 'Excluir',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Excluir clicado');
                    }
                },
                {
                    text: 'Compartilhar',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Compartilhar clicado');
                    }
                },
                {
                    text: 'Editar',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Editar clicado');
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancelar clicado');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    FeedPage.prototype.ionViewDidLoad = function () {
        //realizar chamadas ao carregar a pagina caso necessario
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/feed/feed.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Feed</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="./../../assets/img/pp.jpeg">\n            </ion-avatar>\n            <h2>{{nomeUsuario}}</h2>\n            <p>{{objeto_feed.data_feed | date: \'dd/MM/yyyy\'}}</p>\n            <!--<p>November 5, 1955</p>-->\n        </ion-item>\n\n        <img class="tamanhoImagem" src="./../../assets/img/Logo-ES-Fundo-branco.png">\n\n        <ion-card-content>\n            <p>DevOps é a reação à interdependência entre desenvolvimento de software e operações de TI. Pretende ajudar organizações a produzir software e serviços rapidamente. Empresas que liberam novas versões de software frequentemente podem precisar\n                das considerações ou orientações de um DevOps</p>\n        </ion-card-content>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-left clear small>\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div (tap)="tapEvent($event)">{{curtidas}} Curtidas</div>\n                 </button>\n            </ion-col>\n            <ion-col>\n                <button color="dark" ion-button icon-left clear small>\n                    <ion-icon name="text"></ion-icon>\n                    <div>110 Comentários</div>\n                 </button>\n            </ion-col>\n            <ion-col center text-center>\n                <ion-note>\n                    {{dataAtual | date: \'dd/MMMM/yyyy HH:mm\'}}\n                </ion-note>\n            </ion-col>\n        </ion-row>\n        <ion-item center class="marginDiv">\n            <button color="light" center ion-button round small (click)="abrirMenu()">\n                 Mais\n            </button>\n        </ion-item>\n    </ion-card>\n\n    <ion-card>\n        <img src="./../../assets/img/advance-card-map-madison.png">\n        <!-- <ion-fab right top>\n             <button ion-fab> \n       <ion-icon name="pin"></ion-icon> \n     </button> \n        </ion-fab> -->\n\n        <ion-item>\n            <ion-icon name="md-flag" item-left large></ion-icon>\n            <h2>MeetUp DevOps</h2>\n            <p>14 S. Hop Avenue, Madison, WI 53703</p>\n        </ion-item>\n\n        <ion-item>\n            <span item-left>18 min</span>\n            <span item-left>(2.6 mi)</span>\n            <button ion-button icon-left clear item-end ng-href="https://goo.gl/maps/USqyFgB8g5k">\n                 <ion-icon name="navigate" ></ion-icon>\n                 Ir até o local\n             </button>\n        </ion-item>\n        <ion-item center class="marginDiv">\n            <button center color="light" ion-button round small (click)="abrirMenu()">\n                 Mais\n            </button>\n        </ion-item>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/pages/feed/feed.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _d || Object])
], FeedPage);

var _a, _b, _c, _d;
//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            // AboutPage,
            // ContactPage,
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            // AboutPage,
            // ContactPage,
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_intro_intro__["a" /* IntroPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_intro_intro__["a" /* IntroPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/ricardo.morais/ricardo.morais/Projetos/IonicProjeto/AppIonic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map