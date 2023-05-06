const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const transactionSchema = new mongoose.Schema({

    USER1: {
        type: ObjectId,
        required: true,
        ref: 'userModel'
    },

    USER2: {
            type: ObjectId,
            required: true,
            ref: '  userModel'
        },
    amount: {
        type: Number,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)