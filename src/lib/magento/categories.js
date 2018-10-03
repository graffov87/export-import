'use strict';

let AbstractAdapter = require('./abstract');

class Categories extends AbstractAdapter {

    constructor(config){
        super(config);
      }

     async getCategories() {
         let token = await this.getToken();
        var configureData = {
            url: "",
            json: true,
            body:""
        };
        return await this.request.get( "all/V1/categories", token);
    }
}
module.exports = Categories;