const mongoose = require('mongoose');

//email validation
const checkEmail = function (email) {
    //will test the below regex pattern, i dont think it should be in a string
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const userSchema = new mongoose.Schema({ 
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String, 
        required: true, 
        unique: true
    },
    password:{
        type: String, 
        required: true
    }
},
{
    timestamps: true
})
//47:47 potenial useAdmin
module.exports = mongoose.model("User", userSchema);