let express = require('express');
let app = express();
let validate = require('./validateReq');
app.use(express.json());

app.use(validate);

app.post('/add',(req,res,next)=>{
    let add = parseInt( req.body.a) + parseInt( req.body.b);
    res.send(add+"");
});

app.listen(3000,()=>{
    console.log("Hi Iam in 3000 port");
})