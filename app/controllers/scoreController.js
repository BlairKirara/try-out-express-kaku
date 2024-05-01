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

    // Save the score to the database
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
      // Assuming you have access to the user's ID through authentication
      const userId = req.user.id;
  
      // Fetch scores for the logged-in user
      const userScores = await QuizScore.findAll({
        where: { userId },
        order: [['score', 'DESC']] // Sort scores in descending order
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
  
      // Delete all scores associated with the given user ID and level
      await QuizScore.destroy({ where: { userId, lvl: level } });
  
      // Redirect to the same page after resetting scores
      res.redirect('/scores'); // Update with your actual route
    } catch (error) {
      console.error('Error resetting quiz scores:', error);
      res.status(500).json({ success: false, message: 'Server Error' });
    }
  };
  