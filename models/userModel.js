const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    totalAmount:{
        type:Number,
        require:true
    }

  

}, { timestamps: true })

module.exports = mongoose.model('usersModel', usersSchema)