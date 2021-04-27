const api = {};
const API_HOST = "http://localhost:2082";

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