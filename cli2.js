let options = require('./config/config');
var Request = require('./src/lib/requests').Request;
var Categories = require('./src/lib/magento/categories');
var Products = require('./src/lib/magento/products');
var categories = new Categories(options);

let request = Request(options);
request.getToken().then(async function(result) {
    let token = result;
    var categories = new Categories();
 //   var products = new Products();
    var url = categories.getCategories();
    return await getResult(url, token);
//    var prods = await getResult(products.getProducts(), token); 
});

 async function getResult(url, token) {
     return await request.get(url, token);
 }