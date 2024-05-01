const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const SetList = require('../models/set_list');
const HiraganaSet = require('../models/hiragana_set');

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
      await HiraganaSet.create({
        setId: setList.id,
        hiragana: flashcard.hiragana,
        romaji: flashcard.romaji,
      });
    }

    res.status(200).json({ success: true, message: 'Set saved successfully' });
  } catch (error) {
    console.error('Error saving set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.delete_set = async (req, res) => {
  try {
    const setId = req.params.setId;

    const flashcards = await HiraganaSet.findAll({
      where: { setId: setId },
    });

    for (let flashcard of flashcards) {
      await flashcard.destroy();
    }

    const set = await SetList.findOne({
      where: { id: setId },
    });
    await set.destroy();

    res.status(200).json({
      success: true,
      message: 'Set and associated flashcards deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.get_sets= async (req, res) => {
  try {
    // Assuming you have access to the user's ID through authentication
    const userId = req.user.id;

    // Fetch scores for the logged-in user
    const userSets = await SetList.findAll({
      where: { userId },
    });

    res.render('user_sets', { sets: userSets, user: req.user });
  } catch (error) {
    console.error('Error fetching user scores:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.practiceSet = async (req, res) => {
  try {
    const { setId } = req.params;

    // Fetch the set and its associated flashcards
    const set = await HiraganaSet.findAll({ where: { setId } });

    if (!set) {
      return res.status(404).send('Set not found');
    }

    res.render('practice_set', { set });
  } catch (error) {
    console.error('Error practicing set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
