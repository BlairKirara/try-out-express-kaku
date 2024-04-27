const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');
const SetList = require('../models/set_list');

dotenv.config();

exports.save_set = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name } = req.body; 
    const setList = await SetList.create({
      userId: userId,
      name: name,
    });

    res
      .status(200)
      .json({ success: true, message: 'Set saved successfully' });
  } catch (error) {
    console.error('Error saving set:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


