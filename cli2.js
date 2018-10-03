let options = require('./config/config');
var Request = require('./src/lib/requests').Request;
var Categories = require('./src/lib/magento/categories');

var categories = new Categories(options);

categories.getCategories().then(function(result) {
console.log(result);
});