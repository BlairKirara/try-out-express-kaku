const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const QuizScore = require('../models/quiz_score');

dotenv.config();

exports.save_score = async (req, res) => {
  try {
    const userId = req.user.id;
    const { score } = req.body; 
    const { lvl } = req.body;

    const quizScore = await QuizScore.create({
      userId: userId,
      lvl: lvl,
      score: score,
    });

    res
      .status(200)
      .json({ success: true, message: 'Score saved successfully' });
  } catch (error) {
    console.error('Error saving score:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.get_scores = async (req, res) => {
    try {

      const userId = req.user.id;
  
      const userScores = await QuizScore.findAll({
        where: { userId },
        order: [['score', 'DESC']] 
      });
  
      res.render('user_scores', { scores: userScores, user: req.user });
    } catch (error) {
      console.error('Error fetching user scores:', error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };


exports.resetQuizScores = async (req, res) => {
    try {
      const { userId, level } = req.params;
  
      await QuizScore.destroy({ where: { userId, lvl: level } });
  
      res.redirect('/scores'); 
    } catch (error) {
      console.error('Error resetting quiz scores:', error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  