export class BBCode {

    codes : any = {
        '\\[br\\]': '<br>',
    
        '\\[b\\](.+?)\\[/b\\]': '<strong>$1</strong>',
        '\\[i\\](.+?)\\[/i\\]': '<em>$1</em>',
        '\\[u\\](.+?)\\[/u\\]': '<u>$1</u>',
        '\\[center\\](.+?)\\[/center\\]': '<center>$1</center>',
    
        '\\[h1\\](.+?)\\[/h1\\]': '<h1>$1</h1>',
        '\\[h2\\](.+?)\\[/h2\\]': '<h2>$1</h2>',
        '\\[h3\\](.+?)\\[/h3\\]': '<h3>$1</h3>',
        '\\[h4\\](.+?)\\[/h4\\]': '<h4>$1</h4>',
        '\\[h5\\](.+?)\\[/h5\\]': '<h5>$1</h5>',
        '\\[h6\\](.+?)\\[/h6\\]': '<h6>$1</h6>',
    
        '\\[p\\](.+?)\\[/p\\]': '<p>$1</p>',
    
        '\\[color=(.+?)\\](.+?)\\[/color\\]':  '<span style="color:$1">$2</span>',
        '\\[size=([0-9]+)\\](.+?)\\[/size\\]': '<span style="font-size:$1px">$2</span>',
    
        '\\[img\\](.+?)\\[/img\\]': '<img src="$1">',
        '\\[img=(.+?)\\]':          '<img src="$1">',
    
        '\\[email\\](.+?)\\[/email\\]':       '<a href="mailto:$1">$1</a>',
        '\\[email=(.+?)\\](.+?)\\[/email\\]': '<a href="mailto:$1">$2</a>',
    
        '\\[url\\](.+?)\\[/url\\]':                      '<a href="$1">$1</a>',
        '\\[url=(.+?)\\|onclick\\](.+?)\\[/url\\]':      '<a onclick="$1">$2</a>',
        '\\[url=(.+?)\\starget=(.+?)\\](.+?)\\[/url\\]': '<a href="$1" target="$2">$3</a>',
        '\\[url=(.+?)\\](.+?)\\[/url\\]':                '<a href="$1">$2</a>',
    
        '\\[a=(.+?)\\](.+?)\\[/a\\]': '<a href="$1" name="$1">$2</a>',
    
        '\\[list\\](.+?)\\[/list\\]': '<ul>$1</ul>',
        '\\[\\*\\](.+?)\\[/\\*\\]':   '<li>$1</li>'
    }

    /**
     * @param {Object} codes
     */
    constructor() {
         
        this.setCodes(this.codes);
    }

    /**
     * parse
     *
     * @param {String} text
     * @returns {String}
     */
    parse(text) {
        return this.codes.reduce((text, code) => text.replace(code.regexp, code.replacement), text);
    }

    /**
     * add bb codes
     *
     * @param {String} regex
     * @param {String} replacement
     * @returns {BBCode}
     */
    add(regex, replacement) {
        this.codes.push({
            regexp:      new RegExp(regex, 'igm'),
            replacement: replacement
        });

        return this;
    }

    /**
     * set bb codes
     *
     * @param {Object} codes
     * @returns {BBCode}
     */
    setCodes(codes) {
        this.codes = Object.keys(codes).map(function (regex) {
            const replacement = codes[regex];

            return {
                regexp:      new RegExp(regex, 'igm'),
                replacement: replacement
            };
        }, this);

        return this;
    }
}

export class Templates {

    faqCategory(data) {

        return `
        <div class="faqCardContainer" data-category="${data.id}">
            <div class="faqCard">
                <div class="faqCardTitle">${data.title}</div>
                <div class="faqCardSubtitle">${data.description}</div>
            </div>
        </div>
        `

    }

    carrerData(carrer) {

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

    carrers(carrers) {

        let html = "";

        carrers.forEach(carrer => {

            html += `
            <div class="carrerContainer" data-carrer="${carrer.uid}">
                <div class="carrer">
                    <div class="carrerTitle">${carrer.name}</div>
                    <div class="carrerSubtitle">${carrer.department ? carrer.department : ""} ${carrer.experience_level ? ` - ${carrer.experience_level}` : ''}</div>
                </div>
            </div>
            `
        })

        return html;

    }

    carrerCategories(data) {

        let html = "";

        Object.keys(data).forEach(category => {


            html += `
                <div class="carrerCategory">
                    <div class="carrerCategoryTitle">${data[category].categoryTitle}</div>
                    <div class="carrerList">${this.carrers(data[category].carrers)}</div>
                </div>
            `;

        });

        return html;

    }

    faqContent(data) {

        let bbcode = new BBCode();

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
                <div class="faqResponseBody">${bbcode.parse(data.answer)}</div>
            </div>
        </div>
        
        `


    }

    promotionHome(promotion) {

        return `
        <div class="promotionContainer">
            <div class="promotion">
                <div class="promoLogo">
                    <img src="https://uala-mex-frontend-promotions-prod.s3.amazonaws.com/${promotion.image}" alt="">
                </div>
                <div class="promoTime">${promotion.date}</div>
                <div class="promoText">${promotion.previewTitle}</div>
                <a href="/promociones-condiciones?id=${promotion.promotionsid}" class="promoMore blue">Ver mas</a>
            </div>
        </div>
        `;

    }

    promotionConditions(promotion){


        return `

        <div class="sectionTitle">
            <div class="sectionBack">
                <div class="sectionBackIcon">
                    <i class="fas fa-chevron-left"></i>
                </div>
                <a href="/promociones" class="sectionBackTitle">
                    Promociones
                </a>
            </div>
        </div>
        <div class="promoHomeConditionContainer breakContainer">
            <div class="leftContainer wrapContainer">
                <div class="promoConditionLogo">
                    <img src="https://uala-mex-frontend-promotions-prod.s3.amazonaws.com/${promotion.image}" alt="">
                </div>
                <div class="promoConditionData">
                    <div class="promoConditionTitle">${promotion.title}</div>
                    <div class="promoConditionSubtitle">${promotion.description}</div>
                    <div class="promoConditionTime">${promotion.date}</div>
                    ${ promotion.location ? `<div class="promoConditionLocation"><i class="fas fa-map-marker-alt"></i> ${ promotion.location }</div>`: "" }
                    ${ promotion.actionText ? `<div class="promoConditionButtom">
                        <a target="_BLANK" href="${promotion.actionUrl}" class="conditionButtom">${promotion.actionText}</a>
                    </div>`: "" }
                </div>
            </div>
            <div class="rightContainer desktop">
                    <div class="image">
                        <img src="/assets/images/gif/promotions.gif" alt="">
                    </div>
                </div>
            </div>
            <div class="promoConditionsContainer">
                <h2>Bases y condiciones</h2>
                <p class="conditions">${promotion.conditions}</p>
            </div>

        `

    }

}