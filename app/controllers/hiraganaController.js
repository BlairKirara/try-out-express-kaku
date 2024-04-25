const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getHiragana = async (req, res) => {
  try {
    res.render('hiragana', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getHiraganaList = async (req, res) => {
  try {
    const hiraganaData = [
      { Hiragana: "あ", Romaji: 'a' },
      { Hiragana: "い", Romaji: 'i' },
      { Hiragana: "う", Romaji: 'u' },
      { Hiragana: "え", Romaji: 'e' },
      { Hiragana: "お", Romaji: 'o' },
      { Hiragana: "か", Romaji: 'ka' },
      { Hiragana: "き", Romaji: 'ki' },
      { Hiragana: "く", Romaji: 'ku' },
      { Hiragana: "け", Romaji: 'ke' },
      { Hiragana: "こ", Romaji: 'ko' },
      { Hiragana: "さ", Romaji: 'sa' },
      { Hiragana: "し", Romaji: 'shi' },
      { Hiragana: "す", Romaji: 'su' },
      { Hiragana: "せ", Romaji: 'se' },
      { Hiragana: "そ", Romaji: 'so' },
      { Hiragana: "た", Romaji: 'ta' },
      { Hiragana: "ち", Romaji: 'chi' },
      { Hiragana: "つ", Romaji: 'tsu' },
      { Hiragana: "て", Romaji: 'te' },
      { Hiragana: "と", Romaji: 'to' },
      { Hiragana: "な", Romaji: 'na' },
      { Hiragana: "に", Romaji: 'ni' },
      { Hiragana: "ぬ", Romaji: 'nu' },
      { Hiragana: "ね", Romaji: 'ne' },
      { Hiragana: "の", Romaji: 'no' },
      { Hiragana: "は", Romaji: 'ha' },
      { Hiragana: "ひ", Romaji: 'hi' },
      { Hiragana: "ふ", Romaji: 'fu' },
      { Hiragana: "へ", Romaji: 'he' },
      { Hiragana: "ほ", Romaji: 'ho' },
      { Hiragana: "ま", Romaji: 'ma' },
      { Hiragana: "み", Romaji: 'mi' },
      { Hiragana: "む", Romaji: 'mu' },
      { Hiragana: "め", Romaji: 'me' },
      { Hiragana: "も", Romaji: 'mo' },
      { Hiragana: "や", Romaji: 'ya' },
      { Hiragana: "ゆ", Romaji: 'yu' },
      { Hiragana: "よ", Romaji: 'yo' },
      { Hiragana: "ら", Romaji: 'ra' },
      { Hiragana: "り", Romaji: 'ri' },
      { Hiragana: "る", Romaji: 'ru' },
      { Hiragana: "れ", Romaji: 're' },
      { Hiragana: "ろ", Romaji: 'ro' },
      { Hiragana: "わ", Romaji: 'wa' },
      { Hiragana: "を", Romaji: 'wo' },
      { Hiragana: "ん", Romaji: 'n' }
    ];
    const hiraganaDakuten = [
      { Hiragana: "が", Romaji: 'ga'},
      { Hiragana: "ぎ", Romaji: 'gi'},
      { Hiragana: "ぐ", Romaji: 'gu'},
      { Hiragana: "げ", Romaji: 'ge'},
      { Hiragana: "ご", Romaji: 'go'},
      { Hiragana: "ざ", Romaji: 'za'},
      { Hiragana: "じ", Romaji: 'ji'},
      { Hiragana: "ず", Romaji: 'zu'},
      { Hiragana: "ぜ", Romaji: 'ze'},
      { Hiragana: "ぞ", Romaji: 'zo'},
      { Hiragana: "だ", Romaji: 'da'},
      { Hiragana: "ぢ", Romaji: 'ji'},
      { Hiragana: "づ", Romaji: 'zu'}, 
      { Hiragana: "で", Romaji: 'de'},
      { Hiragana: "ど", Romaji: 'do'},
      { Hiragana: "ば", Romaji: 'ba'},
      { Hiragana: "び", Romaji: 'bi'},
      { Hiragana: "ぶ", Romaji: 'bu'},
      { Hiragana: "べ", Romaji: 'be'},
      { Hiragana: "ぼ", Romaji: 'bo'},
      { Hiragana: "ぱ", Romaji: 'pa'},
      { Hiragana: "ぴ", Romaji: 'pi'},
      { Hiragana: "ぷ", Romaji: 'pu'},
      { Hiragana: "ぺ", Romaji: 'pe'},
      { Hiragana: "ぽ", Romaji: 'po'}
    ];
    const hiraganaCombinationsData = [
      { Hiragana: "きゃ", Romaji: 'kya'},
      { Hiragana: "きゅ", Romaji: 'kyu'},
      { Hiragana: "きょ", Romaji: 'kyo'},
      { Hiragana: "ぎゃ", Romaji: 'gya'},
      { Hiragana: "ぎゅ", Romaji: 'gyu'},
      { Hiragana: "ぎょ", Romaji: 'gyo'},
      { Hiragana: "しゃ", Romaji: 'sha'},
      { Hiragana: "しゅ", Romaji: 'shu'},
      { Hiragana: "しょ", Romaji: 'sho'},
      { Hiragana: "じゃ", Romaji: 'ja'},
      { Hiragana: "じゅ", Romaji: 'ju'},
      { Hiragana: "じょ", Romaji: 'jo'},
      { Hiragana: "ちゃ", Romaji: 'cha'},
      { Hiragana: "ちゅ", Romaji: 'chu'},
      { Hiragana: "ちょ", Romaji: 'cho'},
      { Hiragana: "にゃ", Romaji: 'nya'},
      { Hiragana: "にゅ", Romaji: 'nyu'},
      { Hiragana: "にょ", Romaji: 'nyo'},
      { Hiragana: "ひゃ", Romaji: 'hya'},
      { Hiragana: "ひゅ", Romaji: 'hyu'},
      { Hiragana: "ひょ", Romaji: 'hyo'},
      { Hiragana: "びゃ", Romaji: 'bya'},
      { Hiragana: "びゅ", Romaji: 'byu'},
      { Hiragana: "びょ", Romaji: 'byo'},
      { Hiragana: "ぴゃ", Romaji: 'pya'},
      { Hiragana: "ぴゅ", Romaji: 'pyu'},
      { Hiragana: "ぴょ", Romaji: 'pyo'},
      { Hiragana: "みゃ", Romaji: 'mya'},
      { Hiragana: "みゅ", Romaji: 'myu'},
      { Hiragana: "みょ", Romaji: 'myo'},
      { Hiragana: "りゃ", Romaji: 'rya'},
      { Hiragana: "りゅ", Romaji: 'ryu'},
      { Hiragana: "りょ", Romaji: 'ryo'}
    ];    
    res.render('hiragana/hiragana_list', { user: req.user, hiragana: hiraganaData, hiragana_dakuten: hiraganaDakuten, hiragana_combinations: hiraganaCombinationsData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};


exports.getHiraganaQuizLvl = async (req, res) => {
  try {
    res.render('hiragana/hiragana_quiz_lvl', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getHiraganaQuiz = async (req, res) => {
  try {
    res.render('hiragana/hiragana_quiz', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};