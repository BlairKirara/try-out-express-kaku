const passport = require('passport');
const Set = require('../models/set_list');
const dotenv = require('dotenv');
const HiraganaSet = require('../models/hiragana_set');

dotenv.config();

exports.save_set_data = async (req, res) => {
  try {
    const { setName } = req.body; 
    const set = await Set.findOne({ name: setName }); 

    if (!set) {
      return res.status(404).json({ success: false, message: 'Set not found' });
    }

    const setId = set.id;
    const { hiragana } = req.body; 
    const { romaji } = req.body;
    const hiraganaSet = await HiraganaSet.create({
      setId: setId,
      hiragana: hiragana,
      romaji: romaji
    });

    res
      .status(200)
      .json({ success: true, message: 'Hiragana set data saved successfully' });
  } catch (error) {
    console.error('Error saving hiragana set data:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

