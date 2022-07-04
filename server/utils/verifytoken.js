const JWT = require("jsonwebtoken");
const createError = require("./errors");

//this needs to be converted to async scot
const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401, "Not authenticated!"))
    }

    JWT.verify(token, process.env.JWT, (err, user)=>{
        if(err)
        return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    });
};
module.exports= verifyToken;