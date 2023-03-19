const express = require('express');
const addAPIKey = require('../controller/apikey-controller');
const routers = express.Router();

routers.get('/',addAPIKey);
module.exports = routers;