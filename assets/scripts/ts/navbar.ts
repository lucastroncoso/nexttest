export class Navbar {

    bind(){
        
        document.querySelectorAll("[data-toggle]").forEach((element:HTMLElement)=> {
            element.addEventListener("click", () =>{ 
                let toggleId = element.dataset.toggle;
                document.getElementById(toggleId).classList.toggle("flex")
            })
        })
    }

}