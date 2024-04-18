const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getRadicals = async (req, res) => {
  try {
    res.render('radicals', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getRadicalsList = async (req, res) => {
  try {
    const radicalsData = [
      { Radical: "一", Romaji: "ichi", Meaning: "one" }
    ];
    res.render('radicals/radicals_list', { radicals: radicalsData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};