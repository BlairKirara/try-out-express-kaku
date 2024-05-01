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

exports.get_katakana_sets = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch sets from SetList where userId matches
    const userSets = await SetList.findAll({
      where: { userId },
    });

    // Filter sets to include only those whose setId exists in katakana_sets
    const filteredSets = await Promise.all(userSets.map(async (set) => {
      const count = await KatakanaSet.count({ where: { setId: set.id } });
      if (count > 0) {
        return set;
      }
    }));

    // Remove undefined entries from the filtered sets
    const katakanaSets = filteredSets.filter((set) => set);

    res.render('katakana_sets', { sets: katakanaSets, user: req.user });
  } catch (error) {
    console.error('Error fetching user katakana sets:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.delete_katakana_set = async (req, res) => {
  try {
    const setId = req.params.setId;

    const flashcards = await KatakanaSet.findAll({
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

exports.editKatakanaSet = async (req, res) => {
  try {
    const { setId } = req.params;

    // Fetch the set and its associated flashcards
    const set = await KatakanaSet.findAll({ where: { setId } });

    if (!set) {
      return res.status(404).send('Set not found');
    }

    res.render('edit_katakana_set', { set });
  } catch (error) {
    console.error('Error editing set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.delete_katakana_flashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;

    // Find the flashcard by ID and delete it
    const flashcard = await KatakanaSet.findByPk(flashcardId);
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

exports.update_katakana_flashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;
    const { romaji, katakana } = req.body;

    // Find the flashcard by ID and update its data
    const flashcard = await KatakanaSet.findByPk(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ success: false, message: 'Flashcard not found' });
    }

    // Update the flashcard's data
    flashcard.romaji = romaji;
    flashcard.katakana = katakana;

    // Save the updated flashcard
    await flashcard.save();

    res.status(200).json({ success: true, message: 'Flashcard updated successfully' });
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.editKatakanaFlashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;

    // Fetch the flashcard by ID
    const flashcard = await KatakanaSet.findByPk(flashcardId);

    if (!flashcard) {
      return res.status(404).send('Flashcard not found');
    }

    res.render('edit_katakana_flashcard', { flashcard });
  } catch (error) {
    console.error('Error editing flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.updateKatakanaFlashcard = async (req, res) => {
  try {
    const { flashcardId } = req.params;
    const { romaji, katakana } = req.body;

    // Find the flashcard by ID and update its data
    const flashcard = await KatakanaSet.findByPk(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ success: false, message: 'Flashcard not found' });
    }

    // Update the flashcard's data
    flashcard.romaji = romaji;
    flashcard.katakana = katakana;

    // Save the updated flashcard
    await flashcard.save();

    res.redirect('/katakana_sets'); // Redirect to the main page or wherever you want
  } catch (error) {
    console.error('Error updating flashcard:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.practiceKatakanaSet = async (req, res) => {
  try {
    const { setId } = req.params;

    // Fetch the set and its associated flashcards
    const set = await KatakanaSet.findAll({ where: { setId } });

    if (!set) {
      return res.status(404).send('Set not found');
    }

    res.render('practice_katakana_set', { set });
  } catch (error) {
    console.error('Error practicing set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};