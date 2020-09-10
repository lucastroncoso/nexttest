const $ = require("jquery");
const path = window.location.pathname;
const pagesFolder = "assets/html/pages";
const modulesFolder = "assets/html/modules";

import { Navbar } from './navbar'

export class Routes {
 
    actualRoute;
    routes = {
        "/" : { page: "home", header: true, footer: true },
        "/seguridad" : { page: "security", header: true, footer: true },
        "/preguntas" : { page: "faq", header: true, footer: true },
        "/privacidad" : { page: "privacy", header: true, footer: true },
        "/transferencias" : { page: "transfers", header: true, footer: true },
        "/pagos" : { page: "payments", header: true, footer: true },
        "/costos" : { page: "charge", header: true, footer: true },
        "/inversiones" : { page: "investment", header: true, footer: true },
        "/psp" : { page: "psp", header: true, footer: true },
        "/contacto" : { page: "contact", header: true, footer: true },
        "/promociones" : { page: "promotions", header: true, footer: true },
        "/tarjeta" : { page: "card", header: true, footer: true },
        "/extracciones" : { page: "extractions", header: true, footer: true },
        "/nosotros" : { page: "about", header: true, footer: true }
    }; 

    constructor(
        private _navbar = new Navbar()
    ){
        this.actualRoute = this.routes[path];
    }

    init(){
 
        if(!this.isValid()) window.location.replace("/");

        if(this.actualRoute.header) $("header").load(`${modulesFolder}/header.html`, () => {
            this._navbar.bind()
        });
        
        if(this.actualRoute.footer) $("footer").load(`${modulesFolder}/footer.html`);

        $("main").load(`${pagesFolder}/${this.actualRoute.page}.html`);

        

    }

    isValid(){
        return !!this.routes[path];
    }

}