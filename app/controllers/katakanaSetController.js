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