const express = require("express")
const session = require('express-session')
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const MongoDBStore = require("connect-mongodb-session")(session);

const pageRouter = require("./routes/page")
const userRouter = require("./routes/user")

mongoose.connect("mongodb://localhost/demo-nodejs", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })

const store = new MongoDBStore({
    uri: process.env.MONGODB_URI || "mongodb://localhost/demo-nodejs",
    collection: "sessions"
});

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET || "s3cre7k3yf012s35510n",
    resave: false,
    saveUninitialized: false,
    store: store
}))

app.use("/page", pageRouter)
app.use("/user", userRouter)

app.listen(3000, () => {
    console.log('Server is running!')
})