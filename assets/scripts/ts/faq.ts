import { content, categories } from "../json/faqs"
import { Templates } from "./templates"

export class Faq {

    constructor(
        private _templates = new Templates()
    ){
        
    }

    bind(){

        document.getElementById("sectionBack").addEventListener("click", ()=>{
            this.drawCategories()
        }) 

        document.getElementById("searchFaq").addEventListener("input", event =>{
            
            let value = (<HTMLInputElement>document.getElementById("searchFaq")).value;

            if(value){
                this.drawFaqs(false, value)
            }else{
                this.drawCategories();
            }
            
        })

    }

    load(){

        this.drawCategories()
        this.bind()

    }

    drawCategories(){

        (<HTMLInputElement>document.getElementById("searchFaq")).value = ""

        document.querySelectorAll("[data-faqcategorypage]").forEach(element=>{
            element.classList.remove("hide")
        })

        document.querySelectorAll("[data-faqcontentpage]").forEach(element=>{
            element.classList.add("hide")
        })

        let categoryContentHTML = "";

        categories.forEach(category => {
            categoryContentHTML += this._templates.faqCategory(category);
        })

        document.getElementById("faqsCategories").innerHTML = categoryContentHTML;

        document.getElementById("faqsCategories").childNodes.forEach((element:HTMLElement) => {

            element.addEventListener("click", () => {
                this.drawFaqs(Number(element.dataset["category"]))
            })
        })

    }

    drawFaqs(category, search:any = false){

        document.querySelectorAll("[data-faqcategorypage]").forEach(element=>{
            element.classList.add("hide")
        })

        document.querySelectorAll("[data-faqcontentpage]").forEach(element=>{
            element.classList.remove("hide")
        })

        let faqsContentHTML = "";
        let categoryData = categories.filter(c => c.id == category)[0]

        content.forEach(faq=>{
            if(category == faq.category || category == false) {

                if(category){
                    // Faqs de una categoria
                    faqsContentHTML += this._templates.faqContent(faq)
                }else{
                    // Busqueda
                    search = search.toLowerCase();
                    if(faq.answer.toLowerCase().includes(search) || faq.question.toLowerCase().includes(search)){
                        faqsContentHTML += this._templates.faqContent(faq)  
                    }
                }
                
                
                
            };
        })

        document.getElementById("faqsContent").innerHTML = faqsContentHTML

        document.getElementById("faqsCategory").innerHTML = category ? categoryData["title"] : "Buscar";

        document.getElementById("faqsContent").childNodes.forEach((element:HTMLElement) => {

            element.addEventListener("click", () => {
                element.classList.toggle("close")
            })
        })


    }


}