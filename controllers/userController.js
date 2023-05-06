const usersModel = require("../models/userModel")

const userCreation = async function (req, res) {
    const newUser = new usersModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        totalAmount:req.body.totalAmount
    })
    try{
    if (Object.keys(req.body) == 0) return res.status(400).send({ status: false, message: "please enter details" })
        const saveUser = await newUser.save();
        res.status(200).json(saveUser)
    }catch(err){
        res.status(500).json(err)
    }
}
