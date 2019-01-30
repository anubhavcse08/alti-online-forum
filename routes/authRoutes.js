const passport = require('passport');

module.exports = app => {
    app.get('/auth/google/user', passport.authenticate('google', {
        scope:['profile', 'email']
    })
    );
    app.get('/auth/google/user/callback', passport.authenticate('google'),(req, res) => {
        res.redirect('http://localhost:3000/login/content-manager');
    });

    app.get('/api/logout', (req, res) => {
        req.logout()
        // res.send(req.user)
        res.redirect('http://localhost:3000')
    })

    app.get('/api/current_user', (req, res) => {
        // console.log('Current user');
        // console.log(req);
        // console.log('Current user Endedfgbhj');
        res.send(req.user);
    })
    
}
