const User = require("../models/users.js");
const bcrypt = require("bcrypt");

//register a new user 
const register = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        //if its successful
        await newUser.save()
        res.status(201).send("User has been created!")
    }catch(err){
        next(err)
    }
}

module.exports = register;