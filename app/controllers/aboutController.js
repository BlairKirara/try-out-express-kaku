const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getAbout = async (req, res) => {
  try {
    res.render('about', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};