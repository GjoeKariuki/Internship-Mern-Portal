const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required: [true, "please add the details of first name"]
    },
    lastName: {
        type:String,
        required: [true, "please add the details of last name"]
    },
    email: {
        type:String,
        required: [true, "please add the details of email"],
        unique: true,
        match: [/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/]     
    },
    gender: {
        type:String,
        required: [true, "please add the email"]
    },
    password: {
        type:String,
        required: [true, "please add the password"]
    },
    contact_number: {
        type:String,
        required: [true, "please add the contact number"]
    },
})



module.exports = mongoose.model("User", UserSchema)