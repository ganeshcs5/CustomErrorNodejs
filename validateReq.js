let CustomError = require('./CustomError');

let validate = (req,res,next)=>{
    if(req.body.a == null || req.body.a == undefined || req.body.a === ""){
        let error = new CustomError(1);
        return res.status(400).send(error);
    }else if(req.body.b == null || req.body.b == undefined || req.body.b === ""){
        let error = new CustomError(2);
        return res.status(400).send(error);
    }
}

module.exports = validate;