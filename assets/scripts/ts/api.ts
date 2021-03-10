const api = {};
const API_HOST = "https://cms.dev.websites.uala.com.mx:2082";

export default class Api {

  async get(resource){

    return await fetch(API_HOST + resource, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    }).then((response) => response.json());
  
  };


}