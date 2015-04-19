var express = require('express');
var app = express(); //create an instance

var bodyParser = require('body-parser');
var multer = require('multer');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'keyboard cat' }));
    app.use(passport.initialize());
    app.use(passport.session());
});

var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';
mongoose.connect(connectionString);


var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String,
    actor: [{
        name: String,
        actorLink: String,
        posterURL: String
    }]

}, { collection: 'User' });

var UserModel = mongoose.model('UserModel', UserSchema);

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
},
  function (username, password, done) {
      UserModel.findOne({ username: username, password: password }, function (err, user) {
          if (err) {
              return done(err);
          }
          if (!user) {
              return done(null, false);
          }
          return done(null, user);
      })
  }));


app.post('/signUp', function (req, res) {
    var newUser = req.body;
    console.log(newUser);
    UserModel.findOne({ username: newUser.username }, function (err, user) {
        if (err) { return next(err); }
        if (user) {
            res.json(null);
            return;
        }
        var newUser = new UserModel(req.body);
        newUser.save(function (err, user) {
            req.login(user, function (err) {
                if (err) { return next(err); }
                res.json(user);
            });
        });
    });
});

app.post('/login', passport.authenticate('local'), function (req, res) {
    var user = req.user;
    res.json(user);
});

app.post('/profile', function (req, res) {
    res.json(req.body);
});

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.post('/logout', function (req, res) {
    var currentUser = req.body;
    req.logout();
    res.send(currentUser);
});

app.get('/loggedin', function (req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');

});



app.put('/saveBookmark', function (req, res) {
    var actorDetails = req.body.userId;
    var actorName = req.body.actorName;
    var actorDetail = req.body.actorDetail;
    var imageDetail = req.body.imageDetail;
    var result = null;
    UserModel.findOne({ username: actorDetails.username }, function (err, res) {

        UserModel.update({ username: res.username },
            { $push: { actor: { $each: [{ name: actorName, actorLink: actorDetail, posterURL: imageDetail }] } } }, function (err, result) {
                if (err) throw err;
                result = result;
            });
    });
    res.json(result);
});

app.post('/getData', function (req, res) {
    var user = req.body;
    var result = null;
    UserModel.findOne({ username: user.username }, function (err, user) {
        if (err) throw err;
        res.json(user);
    });

});


app.delete('/deleteData/:id/:actorLink', function (req, res) {
    var dataDelete = req.body.userName;
    var actorLinkData = req.body.actorLinkData;
    var result = null;
    
    UserModel.findOne({ _id: dataDelete._id }, function (err, res) {
        console.log(res);
        if (res != null) {
            UserModel.update({ username: res.username },
                        { $pull: { actor: { actorLink: req.body.actorLinkData } } }, function (err, result) {
                            if (err) throw err;
                            result = result;
                        });
        }
    });
})
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8000;

app.listen(port, ip);