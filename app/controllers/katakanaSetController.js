const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const SetList = require('../models/set_list');
const KatakanaSet = require('../models/katakana_set');

dotenv.config();

exports.save_set = async (req, res) => {
  try {
    console.log(req.body);
    const userId = req.user.id;
    const { name, flashcards } = req.body;

    console.log('userId:', userId);
    console.log('name:', name);
    console.log('flashcards:', flashcards);
    const setList = await SetList.create({
      userId: userId,
      name: name,
    });

    for (let flashcard of flashcards) {
      await KatakanaSet.create({
        setId: setList.id,
        katakana: flashcard.katakana,
        romaji: flashcard.romaji,
      });
    }

    res.status(200).json({ success: true, message: 'Set saved successfully' });
  } catch (error) {
    console.error('Error saving set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};