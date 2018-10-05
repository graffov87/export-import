'use strict';

let AbstractAdapter = require('./abstract');

function Products() {
    AbstractAdapter.call(this);
    this.getProducts = function() {
        return "all/V1/products?searchCriteria[pageSize]=20";
    };
  }
module.exports = Products;