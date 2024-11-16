let mwfn1 = (req,res,next)=>{
    console.log(req.body);
    req.body.name = req.body.name.toUpperCase();
    next();
};

const mwfn2 = function(req,res,next){
    next();
};

// thre are two type of export in modejs

//1. Default export
//2. Named Export
    // object.property
    // module.exports = {p:v}

module.exports ={mwfn1, mwfn2};    