const User = require("../models/users.js");
const bcrypt = require("bcrypt");
const createError = require("http-errors");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

//register a new user
const authControllers = {
    async register(req, res, next) {
        try {
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
        } catch (err) {
            next(err)
        }
    },

    async login(req, res, next) {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) return next(createError(404, "User not found!"))

            const isPasswordCorrect = await bcrypt.compare(
                req.body.password, user.password
                );
            if (!isPasswordCorrect) 
            return next(createError(400, "Incorrect password or username!"))

            const token = JWT.sign({id:user._id}, process.env.JWT);

            const { password, ...otherDetails } = user._doc;
            res.cookie("access_token", {
              //doesnt allow any client secret to reach this cookie
              httpOnly: true,  
            }).status(200).json(user);
        } catch (err) {
            next(err)
        }
    }
}

module.exports = authControllers;
