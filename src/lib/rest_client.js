'use strict';

let logger = require('../lib/log');
var request = require('request');


module.exports.RestClient = function () {
    var instance = {};

async function apiCall(request_data) {
    logger.debug('Calling API endpoint: ' + request_data.url);
    let promise =  new Promise(function (resolve, reject) {
        request(request_data, function (error, response, body) {
            logger.debug('Response received.');
            
            if (error) {
                logger.error('Error occured: ' + error);
                reject(error);
                return;
            } else if (!httpCallSucceeded(response)) {
                var errorMessage = 'HTTP ERROR ' + response.code;
                if(body && body.hasOwnProperty('message') )
                    errorMessage = errorString(body.message, body.hasOwnProperty('parameters') ? body.parameters : {});
                
                logger.error('API call failed: ' + errorMessage);
                reject(errorMessage);
            }
            resolve(body);
        });
    });

    let result = await promise;
    return result;
}
function httpCallSucceeded(response) {
    return response.statusCode >= 200 && response.statusCode < 300;
}

function errorString(message, parameters) {
    if (parameters === null) {
        return message;
    }
    if (parameters instanceof Array) {
        for (var i = 0; i < parameters.length; i++) {
            var parameterPlaceholder = '%' + (i + 1).toString();
            message = message.replace(parameterPlaceholder, parameters[i]);
        }
    } else if (parameters instanceof Object) {
        for (var key in parameters) {
            var parameterPlaceholder = '%' + key;
            message = message.replace(parameterPlaceholder, parameters[key]);
        }
    }

    return message;
}
instance.get = async function (request_data) {
    request_data['method'] = "GET";
    return await apiCall(request_data);
}
instance.post = async function (request_data) {
    request_data['method'] = "POST";
    return await apiCall(request_data);
}

return instance;
}