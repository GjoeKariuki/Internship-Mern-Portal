const User = require('../models/User')



const signupController = async(req,res) => {
    try {
        const {firstName, lastName, email, gender, password, contact_number} = req.body
        const insert_user = await User.create({firstName, lastName, email, gender, password, contact_number})
        if(!insert_user){
            return res.status(500).json({message:"user registration failed", data:""})
        }
        res.status(201).json({
            message:"registered successfully",
            data: insert_user
        })
    } catch (error) {
        console.log(error);
    }
}

const loginController = async(req,res) => {
    try {
        res.status(200).json({
            message: "logged in successfully",
            data: "data"
        })
    } catch (error) {
        console.log(error);
    }
}





module.exports = {
    signupController,
    loginController
}