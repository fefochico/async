
var model= require('../model/async')

function myasyncA(req, res, next){
    var data=req.params
    if(!data.iter){
        res.status(404).json('Missing field');
        return;
    }
    model.info(data)
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
}


async function myasyncB(req, res, next){
    var data=req.params
    if(!data.iter){
        res.status(404).json('Missing field');
        return;
    }
    try {
        var response= await model.info(data)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error);
    }
}

function myasyncC(req, res, next){
    var data1={iter: req.params.iter1}
    var data2={iter: req.params.iter2}
    if(!data1.iter){
        res.status(404).json('Missing field');
        return;
    }
    mypromises=[model.info(data1), model.info(data2)]
    Promise.all(mypromises)
    .then(result=>{
        res.status(200).json({data1: result[0], data2: result[1]});
    })
    .catch(err=>{
        res.status(500).json({err1: err[0], err2: err[1]});
    })
}


module.exports={
    myasyncA,
    myasyncB,
    myasyncC
}