'use strict';

const promizeLoadController = require('../app/controllers/promizeLoadController');

module.exports = function (app) {
    app.get('/', function(req, res){
        res.status(200).send("Server Connected successfully");
    });
    app.get('/shopify',promizeLoadController.shopify);
    app.get('/shopify/callback',promizeLoadController.callback);

    app.post('/savedomain',promizeLoadController.saveDomainDetails);
    app.post('/getproduct',promizeLoadController.getProduct);
    app.post('/linkproduct',promizeLoadController.linkProduct);
    
    app.get('/loadmagento',promizeLoadController.loadMagento);
}

