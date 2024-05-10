const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getIndex = async (req, res) => {
  try {
    res.render('index', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getSignup = (req, res) => {
  res.render('user/signup', { message: req.flash('error') });
};

exports.postSignup = async (req, res, next) => {
  try {
    if (!req.body.username || !req.body.password || !req.body.confirmPassword) {
      req.flash('error', 'Please fill in all fields!');
      return res.render('user/signup', { message: req.flash('error') });
    }

    const existingUser = await User.findOne({
      where: { username: req.body.username },
    });
    if (existingUser) {
      req.flash('error', 'User already exists!');
      return res.render('user/signup', { message: req.flash('error') });
    }
    if (req.body.password !== req.body.confirmPassword) {
      req.flash('error', 'Passwords do not match!');
      return res.render('user/signup', { message: req.flash('error') });
    }
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;
    if (!passwordRegex.test(req.body.password)) {
      req.flash('error', 'Password must be at least 6 characters long and contain at least one letter and one number!');
      return res.render('user/signup', { message: req.flash('error') });
    }

    await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.flash('success', 'You are now registered and can log in');

    return res.render('user/signup', { successMessage: req.flash('success') });
  } catch (err) {
    return next(err);
  }
};

exports.logIn = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('error', 'Invalid username or password!');
      return res.render('', { message: req.flash('error') });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
};

exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
