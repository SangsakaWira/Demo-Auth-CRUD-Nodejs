const user = require("../models/user")

exports.register = (req, res) => {
    user.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then(doc => {
        return res.redirect("/page/login")
    }).catch(err => {
        console.log(err)
        return res.redirect("/page/register")
    })
}

exports.login = (req, res) => {
    user.findOne({ username: req.body.username }).then(doc => {
        if (doc) {
            if (!(req.body.password === doc.password)) return res.redirect("/page/login")
            req.session.isAuth = true
            return res.redirect("/page/")
        }
        res.redirect("/page/login")
    }).then(err => {

    })
}

exports.updateUserById = (req, res) => {
    user.findByIdAndUpdate(req.params.id).then(doc => {

    })
}

exports.deleteUserById = (req, res) => {
    user.findByIdAndDelete(req.params.id).then(doc => {

    })
}