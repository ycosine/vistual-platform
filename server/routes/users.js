var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

/*var User = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});*/

var User = new Schema({
  nickname: String,
  birthdate: Date
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
/*

 // Configure Passport authenticated session persistence.
 //
 // In order to restore authentication state across HTTP requests, Passport needs
 // to serialize users into and deserialize users out of the session.  The
 // typical implementation of this is as simple as supplying the user ID when
 // serializing, and querying the user record by ID from the database when
 // deserializing.

 passport.use(new Strategy(
 function(username, password, cb) {
 db.users.findByUsername(username, function(err, user) {
 if (err) { return cb(err); }
 if (!user) { return cb(null, false); }
 if (user.password != password) { return cb(null, false); }
 return cb(null, user);
 });
 }));
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});
passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});
*/

