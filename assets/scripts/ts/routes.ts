const $ = require("jquery");
const path = window.location.pathname;
const pagesFolder = "assets/html/pages";
const modulesFolder = "assets/html/modules";

import { Navbar } from './navbar'
import { Faq } from './faq'
import { Home } from './home'

export class Routes {
 
    actualRoute;
    routes = {
        "/" : { page: "home", header: true, footer: true },
        "/seguridad" : { page: "security", header: true, footer: true },
        "/faqs" : { page: "faq", header: true, footer: true },
        "/privacidad" : { page: "privacy", header: true, footer: true },
        "/transferencias" : { page: "transfers", header: true, footer: true },
        //"/pagos" : { page: "payments", header: true, footer: true },
        "/costos" : { page: "charge", header: true, footer: true },
        //"/inversiones" : { page: "investment", header: true, footer: true },
       // "/psp" : { page: "psp", header: true, footer: true },
        "/contrato" : { page: "contract", header: true, footer: true },
        "/contacto" : { page: "contact", header: true, footer: true },
        "/terminos-y-condiciones" : { page: "conditions", header: true, footer: true },
        "/promociones" : { page: "promotions", header: true, footer: true },
        "/promociones-condiciones-coderhouse" : { page: "promotions-conditions-coderhouse", header: true, footer: true },
        "/promociones-condiciones-justo" : { page: "promotions-conditions-justo", header: true, footer: true },
        "/promociones-condiciones-openenglish" : { page: "promotions-conditions-openenglish", header: true, footer: true },
        "/promociones-condiciones-booking" : { page: "promotions-conditions-booking", header: true, footer: true },
        "/tarjeta" : { page: "card", header: true, footer: true },
        "/extracciones" : { page: "extractions", header: true, footer: true },
        "/nosotr@s" : { page: "about", header: true, footer: true },
        "/trabajar-en-uala" : { page: "carrers", header: true, footer: true },
        "/prensa" : { page: "press", header: true, footer: true },
        "/prensa-sobre" : { page: "press-about", header: true, footer: true },
        "/prensa-pier" : { page: "press-founder", header: true, footer: true },
        "/prensa-comunicados" : { page: "press-articles", header: true, footer: true },
        "/prensa-articulo-1" : { page: "press-article-1", header: true, footer: true },
        "/prensa-articulo-2" : { page: "press-article-2", header: true, footer: true },
        "/prensa-articulo-3" : { page: "press-article-3", header: true, footer: true },
        "/prensa-articulo-4" : { page: "press-article-4", header: true, footer: true },
        "/prensa-articulo-5" : { page: "press-article-5", header: true, footer: true },
        "/prensa-articulo-6" : { page: "press-article-6", header: true, footer: true }
    }; 

    constructor(
        private _navbar = new Navbar(),
        private _faq = new Faq(),
        private _home = new Home()
    ){
        this.actualRoute = this.routes[path];
    }

    init(){
 
        if(!this.isValid()) window.location.replace("/");

        if(this.actualRoute.header) $("header").load(`${modulesFolder}/header.html`, () => {
            this._navbar.bind()
        });
        
        if(this.actualRoute.footer) $("footer").load(`${modulesFolder}/footer.html`);

        $("main").load(`${pagesFolder}/${this.actualRoute.page}.html`, () => {
            
            
            switch(this.actualRoute.page){
                case "home":
                    this._home.load()
                break
                case "faq":
                    this._faq.load()
                break
            }

            if(window.location.hash != ""){
          
                    document.getElementById(window.location.hash.slice(1)).scrollIntoView();
              
            }
        });

        

    }

    isValid(){
        return !!this.routes[path];
    }

}