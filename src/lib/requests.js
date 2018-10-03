var RestClient = require('./rest_client').RestClient;

module.exports.Request = function (options) {
    var instance = {};
    var client = RestClient();
    var configureData = {
        url: "",
        json: true,
        body:""
    };
    
    instance.getToken = async function() {
        configureData.url = options.magento.url + "V1/integration/admin/token";
        configureData.body = {username: options.magento.username, password: options.magento.password};
        return await client.post(configureData);
    };
    instance.get = async function(url, token) {
        configureData.url = options.magento.url + url;
        configureData.headers = {"Authorization": "Bearer " + token} 
        return client.get(configureData);
    }
    
    
    return instance;
}