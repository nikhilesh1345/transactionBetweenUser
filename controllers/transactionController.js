const users = require("../models/userModel")
const transaction = require("../models/transactionModel")

const createTransaction = async function (req, res){
try {
    const data = req.body;
    const { USER1, USER2,amount} = data
  if (Object.keys(data) == 0) return res.status(400).send({ status: false, message: "please enter details" })

  let user1 = await users.findOne({ _id:USER1 });
  if (!user1)return res.status(400).send({status: false, message: "USER1  is not correct", });

  let user2 = await users.findOne({_id:USER2 });
  if (!user2)return res.status(400).send({status: false, message: "USER2  is not correct", });
  let user1Amount=user1.totalAmount
  let user1Dec=user1.totalAmount-amount
  let user2Inc=user2.totalAmount+amount

  if(user1&&user2&&user1Amount>=amount){
    await users.findByIdAndUpdate({_id:USER1},{$set:{totalAmount:user1Dec}},{new:true})
    await users.findByIdAndUpdate({_id:USER2},{$set:{totalAmount:user2Inc}},{new:true})
  } else{
    return res.status(400).send({status: false, message: "`Transfer Failed! Insufficient balance in User 1 account.`", });
  }
  let transaction1 = await transaction.create(data)
  res.status(201).json(transaction1)

} catch (error) {
    res.status(500).json(error)
}

}

module.exports ={createTransaction}