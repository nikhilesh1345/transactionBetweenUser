const express = require('express')
const mongoose = require('mongoose')
const route = require("./routes/route")
mongoose.set("strictQuery",true)
                 require("dotenv").config()


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost:27017/transaction', {
    useNewUrlParser: true
})
    .then( () => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000));

}); 
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nikhilesh1345/transactionBetweenUser.git
// git push -u origin main
//git branch -M main
//git push -u origin main