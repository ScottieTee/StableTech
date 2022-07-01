const User = require("../models/users.js");

//register a new user 
const register = async (req, res, next) => {
    try{
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        //if its successful
        await newUser.save()
        res.status(201).send("User has been created!")
    }catch(err){
        next(err)
    }
}

module.exports = register;