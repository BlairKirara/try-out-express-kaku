const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getKatakana = async (req, res) => {
  try {
    res.render('katakana', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};