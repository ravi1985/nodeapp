// var BigCommerce = require('node-bigcommerce');
const db = require('../../config/sequelize');
const Shopify = require('shopify-api-node');
const forwardingAddress = "https://ddc94d6f.ngrok.io";
const apiKey = process.env.SHOPIFY_CLIENT_ID;
const apiSecret = process.env.SHOPIFY_SECRET;
const scopes = 'read_products';
const cookie = require('cookie');
const querystring = require('querystring');
const crypto = require('crypto');
const nonce = require('nonce')();
const request = require('request-promise');

exports.callback = function (req, res) {
  const { shop, hmac, code, state } = req.query;
  console.log(req.query);
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send('Request origin cannot be verified');
  }

  if (shop && hmac && code) {
      const map = Object.assign({}, req.query);
      delete map['signature'];
      delete map['hmac'];
      const message = querystring.stringify(map);
      const providedHmac = Buffer.from(hmac, 'utf-8');
      const generatedHash = Buffer.from(
        crypto
          .createHmac('sha256', apiSecret)
          .update(message)
          .digest('hex'),
          'utf-8'
        );
      let hashEquals = false;
      // timingSafeEqual will prevent any timing attacks. Arguments must be buffers
      try {
        hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
      // timingSafeEqual will return an error if the input buffers are not the same length.
      } catch (e) {
        hashEquals = false;
      };
      
      if (!hashEquals) {
        return res.status(400).send('HMAC validation failed');
      }
      
      const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
      const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code,
      };

      request.post(accessTokenRequestUrl, { json: accessTokenPayload })
      .then((accessTokenResponse) => {
      const accessToken = accessTokenResponse.access_token;
      console.log(accessToken);
      const shopRequestUrl = 'https://productimize.com';
      const shopRequestHeaders = {
      'X-Shopify-Access-Token': accessToken,
      };

      request.get(shopRequestUrl, { headers: shopRequestHeaders })
      .then((shopResponse) => {
      res.end(shopResponse);
      })
      .catch((error) => {
      res.status(error.statusCode).send(error.error.error_description);
      });
      // TODO
      // Use access token to make API call to 'shop' endpoint
      })
      .catch((error) => {
      res.status(error.statusCode).send(error.error.error_description);
      });

    // TODO
    // Validate request is from Shopify
    // Exchange temporary code for a permanent access token
      // Use access token to make API call to 'shop' endpoint
  } else {
    res.status(400).send('Required parameters missing');
  }
}

exports.loadMagento = function (req, res) {
  res.cookie("domain_url", req.query.domain_name);
  res.cookie("license_key", req.query.license_key);
  res.sendFile(process.env.BUILD_PATH + 'index.html');
}

exports.loadShopify = function (req, res) {
  res.cookie("domain_url", req.query.domain_name);
  res.cookie("license_key", req.query.license_key);
  res.sendFile(process.env.BUILD_PATH + 'index.html');
}

exports.shopify = function (req, res, next) {
  const shop = req.query.shop;
  if (shop) {
    const state = nonce();
    
    const redirectUri = forwardingAddress + '/shopify/callback';
    const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;

    res.cookie('state', state);
    console.log(state);
    res.redirect(installUrl);
    console.log(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }
}
exports.saveDomainDetails = function (req, res) {
  const bigCommerce = new BigCommerce({
    secret: process.env.SHOPIFY_SECRET || '',
    responseType: 'json'
  })
  const data = bigCommerce.verify(req.body['signed_payload']);

  res.status(200).json({ message: "Status updated successfully", status: 200 });

  db.config.sync().then(() => {
    return db.updateOrCreate(db.config, {
      store_hash: data.store_hash
    }, {
      domain_name: req.body['domain_url'],
      license_key: req.body['license_key'],
      store_hash: data.store_hash,
      status: 1,
    }).then(function (record) {
      res.status(200).json({ message: "Status updated successfully", status: 200 });
    })
  });
}
exports.getProduct = function (req, res) {
  const bigCommerce = new BigCommerce({
    secret: process.env.SHOPIFY_SECRET || '',
    responseType: 'json'
  })
  const data = bigCommerce.verify(req.body['signed_payload']);
  db.config.sync().then(() => {
    db.config.findOne({ where: { store_hash: data.store_hash } }).then(config => {
      const bigCommerceClient = new BigCommerce({
        clientId: process.env.SHOPIFY_CLIENT_ID,
        accessToken: config.dataValues.access_token,
        responseType: 'json',
        storeHash: config.dataValues.store_hash
      });
      bigCommerceClient.get('/products?include=name')
        .then(data => {
          res.status(200).json({ message: "Status updated successfully", data: data, status: 200 });
        });
    })
  })
}
exports.linkProduct = function (req, res) {
  const bigCommerce = new BigCommerce({
    secret: process.env.SHOPIFY_SECRET || '',
    responseType: 'json'
  })
  const data = bigCommerce.verify(req.body['signed_payload']);
  db.config.sync().then(() => {
    db.config.findOne({ where: { store_hash: data.store_hash } }).then(config => {
      const bigCommerceClient = new BigCommerce({
        clientId: process.env.SHOPIFY_CLIENT_ID,
        accessToken: config.dataValues.access_token,
        responseType: 'json',
        storeHash: config.dataValues.store_hash,
        apiVersion: 'v3'
      });
      const customFieldsData = {
        "name": "customization_id",
        "value": req.body['customizer_products_id']
      }
      bigCommerceClient.post('/catalog/products/' + req.body['product_id'] + '/custom-fields', customFieldsData).then(data => {
        res.status(200).json({ message: "Status updated successfully", data: data, status: 200 });
      }).catch(data => {
        res.status(500).json({ message: "Status updated successfully", data: data, status: 500 });
      });
    })
  })
}