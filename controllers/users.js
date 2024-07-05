const passport = require('../config/passport');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}


module.exports.postRegister = passport.authenticate('local-signup', {
    successRedirect: '/restaurants',
    failureRedirect: '/register',
    failureFlash: false
});
module.exports.postLogin = passport.authenticate('local-signin', {
    failureRedirect: '/login',
    failureFlash: false
});
module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/restaurants';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    req.flash('success', "Goodbye!");
    res.redirect('/restaurants');
}