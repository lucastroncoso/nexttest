import { setInterval } from "timers";

export class Home {

    

    load(){

        let registerStepActive:boolean = true;
        let registerStep = 0;

        window.onscroll = function(event) {

                let registerStepsElement = (<HTMLElement>document.querySelector("#registerSteps"));
                let diff = registerStepsElement.offsetTop - (window.pageYOffset || document.documentElement.scrollTop) - window.innerHeight;
                let percent = Math.abs(diff) / registerStepsElement.clientHeight * 100;
                let value = {
                    1: 0,
                    2: 20,
                    3: 50,
                    4: 80
                };


                if(diff < 0){


                if(registerStepActive){
                    if(percent < 25){
                        if(registerStep < 1) registerStep++;
                    }else if(percent > 40 && percent < 60){
                        if(registerStep < 2) registerStep++;
                    }else if(percent > 60 && percent < 75 ){
                        if(registerStep < 3) registerStep++;
                    }else if(percent > 75 && percent < 90 ){
                        if(registerStep < 4) registerStep++;
                    }else if(percent > 90){
                        if(registerStep == 4) registerStepActive = false;
                    }

                    document.documentElement.style.setProperty('--register-step', `${value[registerStep]}%`);
                    document.querySelector(`#registerStep${registerStep}`).classList.add("opacityDisable")
                }
            }
        };
    }


}