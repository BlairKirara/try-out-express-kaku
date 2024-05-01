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

exports.get_sets = async (req, res) => {
  try {
    const userId = req.user.id;

    const userSets = await SetList.findAll({
      where: { userId },
    });

    const filteredSets = await Promise.all(userSets.map(async (set) => {
      const count = await HiraganaSet.count({ where: { setId: set.id } });
      if (count > 0) {
        return set;
      }
    }));

    const sets = filteredSets.filter((set) => set);

    res.render('hiragana_sets', { sets, user: req.user });
  } catch (error) {
    console.error('Error fetching user sets:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.practiceSet = async (req, res) => {
  try {
    const { setId } = req.params;

    const set = await HiraganaSet.findAll({ where: { setId } });

    if (!set) {
      return res.status(404).send('Set not found');
    }

    res.render('practice_hiragana_set', { set, user: req.user });
  } catch (error) {
    console.error('Error practicing set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.editSet = async (req, res) => {
  try {
    const { setId } = req.params;

    const set = await HiraganaSet.findAll({ where: { setId } });

    if (!set) {
      return res.status(404).send('Set not found');
    }

    res.render('edit_hiragana_set', { set, user: req.user });
  } catch (error) {
    console.error('Error editing set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.delete_flashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;

    const flashcard = await HiraganaSet.findByPk(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ success: false, message: 'Flashcard not found' });
    }
    await flashcard.destroy();

    res.status(200).json({ success: true, message: 'Flashcard deleted successfully' });
  } catch (error) {
    console.error('Error deleting flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.update_flashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;
    const { romaji, hiragana } = req.body;

    const flashcard = await HiraganaSet.findByPk(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ success: false, message: 'Flashcard not found' });
    }

    flashcard.romaji = romaji;
    flashcard.hiragana = hiragana;

    await flashcard.save();

    res.status(200).json({ success: true, message: 'Flashcard updated successfully' });
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.editFlashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;

    const flashcard = await HiraganaSet.findByPk(flashcardId);

    if (!flashcard) {
      return res.status(404).send('Flashcard not found');
    }

    res.render('edit_hiragana_flashcard', { flashcard, user: req.user });
  } catch (error) {
    console.error('Error editing flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.updateFlashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;
    const { romaji, hiragana } = req.body;

    const flashcard = await HiraganaSet.findByPk(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ success: false, message: 'Flashcard not found' });
    }

    flashcard.romaji = romaji;
    flashcard.hiragana = hiragana;

    await flashcard.save();

    res.redirect('/hiragana_sets'); 
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

