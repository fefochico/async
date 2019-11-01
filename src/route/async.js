const express = require('express')
var router = express.Router()
var controller= require('../controller/async')

router.get('/promisecallback/:iter', function(req, res, next){
    controller.myasyncA(req, res, next);
})

router.get('/promiseawait/:iter', function(req, res, next){
    controller.myasyncB(req, res, next);
})

router.get('/promiseallcallback/:iter1/:iter2', function(req, res, next){
    controller.myasyncC(req, res, next);
})

module.exports= router