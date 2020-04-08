const express = require('express');
const router = express.Router();
const passport = require('passport');
const helper = require('./helpers.js');
const cors = require('cors');

// Welcome Page
router.get('/', cors(), helper.ensureAuthenticated, (req, resp) => {
   // resp.writeHead(301,
   //    { Location: 'https://comp4513asg2.netlify.com' }
   // );
   // console.log(req);
   // resp.body(req.user)
   resp.end();
});

router.get('/login', (req, resp) => {
   resp.render('login', { message: req.flash('error') });
});

router.get('/logout', (req, resp) => {
   req.logout();
   req.flash('info', 'You were logged out');
   resp.render('login', { message: req.flash('info') });
});

router.post('/login', async (req, resp, next) => {
   // use passport authentication to see if valid login
   passport.authenticate('localLogin',
      {
         successRedirect: '/',
         failureRedirect: '/login',
         failureFlash: true
      })(req, resp, next);
});

module.exports = router;