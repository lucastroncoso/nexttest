export class Templates {

    faqCategory(data){

        return `
        <div class="faqCardContainer" data-category="${data.id}">
            <div class="faqCard">
                <div class="faqCardTitle">${data.title}</div>
                <div class="faqCardSubtitle">${data.description}</div>
            </div>
        </div>
        `
    
    }

    carrerData(carrer){
        
        return `
        
        <div class="carrerUniqueTitle full">${carrer.name}</div>

        <div class="location full">${carrer.department} - <i class="fa fa-map-marker" aria-hidden="true"></i></div>

        <div class="carrerUniqueDescription full">
            <div class="carrerUniqueDescriptionTitle">Descripciòn</div>
            <div id="description">${carrer.details[0]["value"]}</div>
        </div>

        <div class="carrerUniqueDescription full">
            <div class="carrerUniqueDescriptionTitle">Requerimentos</div>
            <div id="requeriments">${carrer.details[1]["value"]}</div>
        </div>

        <div class="apply full" id="apply">
        
            <script type="comeet-applyform" data-position-uid="${carrer.uid}"></script>

        </div>
        `

    }

    carrers(carrers){
        
        let html = "";

        carrers.forEach(carrer => {

            html += `
            <div class="carrerContainer" data-carrer="${carrer.uid}">
                <div class="carrer">
                    <div class="carrerTitle">${carrer.name}</div>
                    <div class="carrerSubtitle">${carrer.department ? carrer.department : ""} ${ carrer.experience_level ? ` - ${carrer.experience_level}` : '' }</div>
                </div>
            </div>
            `
        })

        return html;
    
    }

    carrerCategories(data){

        let html = "";

        Object.keys(data).forEach(category => {

    
            html += `
                <div class="carrerCategory">
                    <div class="carrerCategoryTitle">${ data[category].categoryTitle }</div>
                    <div class="carrerList">${ this.carrers(data[category].carrers) }</div>
                </div>
            `;
            
        });
 
        return html;

    }


    faqContent(data){

        return `

        <div class="faqResponseContainer close">
            <div class="faqResponse">
                <div class="faqReponseHeader">
                    <div class="faqResponseTitle">${data.question}</div>
                    <div class="headerArrow">
                    <i class="fas fa-chevron-up"></i>
                    <i class="fas fa-chevron-down"></i>
                    </div>
                </div>
                <div class="faqResponseBody">${data.answer}</div>
            </div>
        </div>
        
        `
    
    
    }

}