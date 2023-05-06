const router = require("express").Router()
const{userCreation}=require("../controllers/usersController")
const{createTransaction}=require("../controllers/transactionController")

// USERS
router.post("/users",userCreation)
// TRANSACTION
router.post("/transaction",createTransaction);




module.exports = router
