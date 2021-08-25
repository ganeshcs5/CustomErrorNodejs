let errorMap = require('./errorMapping.json');

module.exports = class CustomError extends Error{
    constructor(code){
        super(code);
        let errorDiscription  = {};
        errorDiscription.message = errorMap[code];
        errorDiscription.code = code;
        this.errorDiscription = errorDiscription;
    }
}