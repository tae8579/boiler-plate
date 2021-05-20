const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jtk:dkagh315@jtk-cluster.t9dqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected.."))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send("Hello World!1231"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



