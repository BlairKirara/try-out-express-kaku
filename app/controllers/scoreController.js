const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const QuizScore = require('../models/quiz_score');

dotenv.config();

exports.score_create_post = async (req, res) => {
  try {
    res.render('score/create', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};