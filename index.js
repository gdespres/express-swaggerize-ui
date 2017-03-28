/**
 * Created by GROOT on 2017/3/28.
 */
const path    = require('path');
const url     = require('url');
const express = require('express');

module.exports = function swaggerUi(options) {

    var router = new express.Router();

    router.use(express.static(path.resolve(__dirname, 'static')));

    return router;

};