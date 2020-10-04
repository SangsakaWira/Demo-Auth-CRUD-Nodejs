exports.isAuth = (req, res, next) => {
    if (!req.session.isAuth) return res.redirect("/page/login")
    next()
}