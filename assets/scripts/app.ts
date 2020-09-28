'use strict';
import { Routes } from './ts/routes'

const Main = class Main {

    constructor(
       public _routes = new Routes()
    ) {
       this.init()
    } 

    init(){
        this._routes.init();
    }
 
   
}

let MainService = new Main()


 
  