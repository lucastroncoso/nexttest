const $ = require("jquery");
const path = window.location.pathname;
const pagesFolder = "assets/html/pages";
const modulesFolder = "assets/html/modules";

import { Navbar } from './navbar'
import { Faq } from './faq'
import { Home } from './home'
import { Carrers } from './carrers'
import { Promotion } from './promotion'

export class Routes { 
 
    actualRoute;
    routes = {
        "/" : { page: "home", header: true, footer: true },
        "/sumate" : { page: "carrers-list", header: false, footer: false },
        "/seguridad" : { page: "security", header: true, footer: true },
        "/faqs" : { page: "faq", header: true, footer: true },
        //"/privacidad" : { page: "privacy", header: true, footer: true },
        "/transferencias" : { page: "transfers", header: true, footer: true },
        //"/pagos" : { page: "payments", header: true, footer: true },
        "/Consulta-los-costos-y-las-comisiones-de-nuestros-productos" : { page: "charge", header: true, footer: true },
        "/reseteo-de-pin" : { page: "landing-reset-pin", header: false, footer: false },
        "/promocion50pesos" : { page: "landing-promocion50pesos", header: false, footer: false },
        //"/inversiones" : { page: "investment", header: true, footer: true },
       // "/psp" : { page: "psp", header: true, footer: true },
        "/contrato" : { page: "contract", header: true, footer: true },
        "/contacto" : { page: "contact", header: true, footer: true },
        "/terminos-y-condiciones" : { page: "conditions", header: true, footer: true },
        "/promociones" : { page: "promotions", header: true, footer: true },
        // "/promociones-condiciones-coderhouse" : { page: "promotions-conditions-coderhouse", header: true, footer: true },
        // "/promociones-condiciones-justo" : { page: "promotions-conditions-justo", header: true, footer: true },
        // "/promociones-condiciones-openenglish" : { page: "promotions-conditions-openenglish", header: true, footer: true },
        // "/promociones-condiciones-booking" : { page: "promotions-conditions-booking", header: true, footer: true },
        // "/promociones-condiciones-linio" : { page: "promotions-conditions-linio", header: true, footer: true },
        // "/promociones-condiciones-bigbox" : { page: "promotions-conditions-bigbox", header: true, footer: true },
        // "/promociones-condiciones-medicato" : { page: "promotions-conditions-medicato", header: true, footer: true },
        // "/promociones-condiciones-cornershop" : { page: "promotions-conditions-cornershop", header: true, footer: true },
        // "/promociones-condiciones-uberpass" : { page: "promotions-conditions-uberpass", header: true, footer: true },
        // "/promociones-condiciones-bestbuy" : { page: "promotions-conditions-bestbuy", header: true, footer: true },
        // "/promociones-condiciones-simpleat" : { page: "promotions-conditions-simpleat", header: true, footer: true },
        // "/promociones-condiciones-steam" : { page: "promotions-conditions-steam", header: true, footer: true },
        // "/promociones-condiciones-tiendanube" : { page: "promotions-conditions-tiendanube", header: true, footer: true },
        // "/promociones-condiciones-educacionit" : { page: "promotions-conditions-educacionit", header: true, footer: true },
        // "/promociones-condiciones-educacionbiz" : { page: "promotions-conditions-educacionbiz", header: true, footer: true },
        // "/promociones-condiciones-dezba" : { page: "promotions-conditions-dezba", header: true, footer: true },
        // "/promociones-condiciones-cabify" : { page: "promotions-conditions-cabify", header: true, footer: true },
        // "/promociones-condiciones-marti" : { page: "promotions-conditions-marti", header: true, footer: true },
        // "/promociones-condiciones-delivery" : { page: "promotions-conditions-delivery", header: true, footer: true },
        // "/promociones-condiciones-suscripciones" : { page: "promotions-conditions-suscriptions", header: true, footer: true },
        // "/promociones-condiciones-canastarosa" : { page: "promotions-conditions-canastarosa", header: true, footer: true },
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
        "/prensa-articulo-6" : { page: "press-article-6", header: true, footer: true },
        "/promociones-condiciones" : { page: "promotions-conditions", header: true, footer: true }
    }; 

    constructor(
        private _navbar = new Navbar(),
        private _faq = new Faq(),
        private _home = new Home(),
        private _carrers = new Carrers(),
        private _promotion = new Promotion()
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
                case "carrers-list":
                    this._carrers.init()
                break
                case "faq":
                    this._faq.load()
                break
                case "promotions":
                    this._promotion.getAllPromotions()
                break
                case "promotions-conditions": 

                    let url = new URL(window.location.href);
                    let id = url.searchParams.get("id");

                    this._promotion.getPromotion(id);
                    
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