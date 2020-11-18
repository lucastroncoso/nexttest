const $ = require("jquery");
import { Templates } from "./templates"
 

export class Carrers {

    constructor(
        private _templates = new Templates()
 
    ){
        
       

    }


    getCarrer(uid) {


        fetch(`https://www.comeet.co/careers-api/2.0/company/54.00B/positions/${uid}?token=45B15C715C78B6273322D88B6D111A22D11&details=true`)
        .then(response => response.json())
        .then(carrer => {
            
            window.location.hash = '' + uid;
            

            document.querySelector("#carrers").classList.add("hide")
            document.querySelector("#carrer").classList.remove("hide")

            document.querySelector("#carrer").innerHTML = this._templates.carrerData(carrer);

        })

           
    }

    getCarrers(){

        document.querySelector("#carrers").classList.remove("hide")
        document.querySelector("#carrer").classList.add("hide")

        fetch('https://www.comeet.co/careers-api/2.0/company/54.00B/positions?token=45B15C715C78B6273322D88B6D111A22D11')
        .then(response => response.json())
        .then(data => {

            var parseData = []
            data.forEach(element => {

                if(element.location.country != "AR"){

                    if(!parseData[element.location.name]){
                        parseData[element.location.name] = [];
                    }

                    parseData[element.location.name]["carrers"] ? parseData[element.location.name]["carrers"].push(element) : (parseData[element.location.name]["carrers"] = [element])
                    parseData[element.location.name]["categoryTitle"] = element.location.name;
                    
                }

            });

            let carrersHTML = this._templates.carrerCategories(parseData)
          
            document.getElementById("carrers").innerHTML = carrersHTML;

            document.querySelectorAll("[data-carrer]").forEach((element:HTMLElement) => {
                
                element.addEventListener("click", () => {
                    this.getCarrer(element.dataset.carrer)
                })

            });
           

        });
      
    }

    init(){

        this.getCarrers();

        if(window.location.hash){
            this.getCarrer(window.location.hash.substring(1)) 
        }

    }


}