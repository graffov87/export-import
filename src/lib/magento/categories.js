'use strict';

let AbstractAdapter = require('./abstract');
/*
class Categories extends AbstractAdapter {

    constructor(config){
        super(config);
      }

     getCategories() {
      
        return "all/V1/categories";
    }
}*/
function Categories() {
    AbstractAdapter.call(this);
    this.getCategories = function() {
        return "all/V1/categories";
    };
  }
module.exports = Categories;