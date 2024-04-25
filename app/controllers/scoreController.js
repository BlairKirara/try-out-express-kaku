const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const QuizScore = require('../models/quiz_score');

dotenv.config();

exports.save_score = async (req, res) => {
  try {
    // Assuming you have access to the user's ID through authentication
    const userId = req.user.id;
    const { score } = req.body; // Assuming the score is sent in the request body

    // Save the score to the database
    const quizScore = await QuizScore.create({
      userId: userId,
      lvl: 'katakana', // Assuming this is for the katakana quiz, you can adjust accordingly
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