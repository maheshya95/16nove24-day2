// console.log(2+4)

// const something = require('somelibrary')
const express = require('express');

//const {namedimport} = require(./somelibrary)
const {mwfn1, mwfn2} = require('./middleware/myMiddleware');

// every function return something 
const app = express();

require('dotenv').config();
// console.log(process.env.PORT);

const PORT = process.env.PORT;

app.use(express.json());

// app.get(routename, middlewarefunction1,mwfn2,mwfn3,...cbfn);
app.post('/students',mwfn1,mwfn2, (req, res)=>{
    const name = req.body.name;
    res.json({
        msg : ` Hi ${name} how are you`
    });
})

app.listen(PORT, function(){
    console.log(`The server is runnig on port ${PORT}`)
})