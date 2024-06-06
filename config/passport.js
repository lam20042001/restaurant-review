const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, username, password, done) {
        try {
            let user = await User.findOne({ username });
            if (user) {
                return done(null, false, { message: 'Username already taken.' });
            }
            user = new User({ username, password });
            await user.save();
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    },
    async function (req, username, password, done) {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return done(null, false, req.flash('error', 'Incorrect username or password!'));
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return done(null, false, req.flash('error', 'Incorrect username or password!'));
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;
