const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users')

// serializeUser determines which data of the user object should be stored in the session
passport.serializeUser((user, done) => {
    // console.log("uSERiD :",user.id)
    done(null, user.id)
})
passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(new googleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/user/callback'
}, async (accessToken, refreshToken, profile, done) => {
    // console.log('Access token ',accessToken)
    // console.log('Profile id', profile)
    // console.log('refrence token ',refreshToken)
    // console.log('Doneee', done)
    const existingUser = await User.findOne({googleId: profile.id})
        if(existingUser){
            return done(null, existingUser)
            // console.log('UserName Already exists')
        }
        const user = await new User({
            googleId: profile.id,
            userName: profile.name.givenName,
            userFullName: profile.displayName,
            userEmail : profile.emails[0].value,
            userImage : profile.photos[0].value,
            userGender : profile.gender,
            userFullImage : profile._json.image.url
        }).save()
        done(null, user);
}));

