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