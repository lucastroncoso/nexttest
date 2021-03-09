import API from "./api"
import { Templates } from "./templates"

export class Promotion {

    async getAllPromotions(){

        let _api = new API();
        let _templates = new Templates();

        let allPromotions = await _api.get("/promotions")

        let promotions = "";

        allPromotions["payload"].forEach(promotion=>{
            promotions += _templates.promotionHome(promotion);
        })  

        document.querySelector("#promotionList").innerHTML = promotions;
        

    }

    async getPromotion(id){

        let _api = new API();
        let _templates = new Templates();
        
        let promotion = await _api.get(`/promotion/${id}`);


        document.querySelector("#promotionCondition").innerHTML = _templates.promotionConditions(promotion["payload"]);

    }

}