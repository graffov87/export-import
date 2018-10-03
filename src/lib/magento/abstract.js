'use strict';

var Request = require('../requests').Request;

class AbstractAdapter {
    constructor(app_config) {
    this.request = Request(app_config);
    }

    async getToken()
    {
        return await this.request.getToken();
    }
}

module.exports = AbstractAdapter;