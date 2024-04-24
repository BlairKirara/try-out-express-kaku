const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getKatakana = async (req, res) => {
  try {
    res.render('katakana', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getKatakanaList = async (req, res) => {
  try {
    const katakanaData = [
      { Katakana: "ア", Romaji: 'a', },
      { Katakana: "イ", Romaji: 'i', },
      { Katakana: "ウ", Romaji: 'u', },
      { Katakana: "エ", Romaji: 'e', },
      { Katakana: "オ", Romaji: 'o', },
      { Katakana: "ナ", Romaji: 'na', },
      { Katakana: "ニ", Romaji: 'ni', },
      { Katakana: "ヌ", Romaji: 'nu', },
      { Katakana: "ネ", Romaji: 'ne', },
      { Katakana: "ノ", Romaji: 'no', },
      { Katakana: "マ", Romaji: 'ma', },
      { Katakana: "ミ", Romaji: 'mi', },
      { Katakana: "ム", Romaji: 'mu', },
      { Katakana: "メ", Romaji: 'me', },
      { Katakana: "モ", Romaji: 'mo', },
      { Katakana: "ヤ", Romaji: 'ya', },
      { Katakana: "ユ", Romaji: 'yu', },
      { Katakana: "ヨ", Romaji: 'yo', },
      { Katakana: "ラ", Romaji: 'ra', },
      { Katakana: "リ", Romaji: 'ri', },
      { Katakana: "ル", Romaji: 'ru', },
      { Katakana: "レ", Romaji: 're', },
      { Katakana: "ロ", Romaji: 'ro', },
      { Katakana: "ワ", Romaji: 'wa', },
      { Katakana: "ヲ", Romaji: 'wo', },
      { Katakana: "ン", Romaji: 'n', }
    ];
    const katakanaDakuten = [
      { Katakana: "ガ", Romaji: 'ga'},
      { Katakana: "ギ", Romaji: 'gi'},
      { Katakana: "グ", Romaji: 'gu'},
      { Katakana: "ゲ", Romaji: 'ge'},
      { Katakana: "ゴ", Romaji: 'go'},
      { Katakana: "ザ", Romaji: 'za'},
      { Katakana: "ジ", Romaji: 'ji'},
      { Katakana: "ズ", Romaji: 'zu'},
      { Katakana: "ゼ", Romaji: 'ze'},
      { Katakana: "ゾ", Romaji: 'zo'},
      { Katakana: "ダ", Romaji: 'da'},
      { Katakana: "ヂ", Romaji: 'ji'},
      { Katakana: "ヅ", Romaji: 'zu'}, 
      { Katakana: "デ", Romaji: 'de'},
      { Katakana: "ド", Romaji: 'do'},
      { Katakana: "バ", Romaji: 'ba'},
      { Katakana: "ビ", Romaji: 'bi'},
      { Katakana: "ブ", Romaji: 'bu'},
      { Katakana: "ベ", Romaji: 'be'},
      { Katakana: "ボ", Romaji: 'bo'},
      { Katakana: "パ", Romaji: 'pa'},
      { Katakana: "ピ", Romaji: 'pi'},
      { Katakana: "プ", Romaji: 'pu'},
      { Katakana: "ペ", Romaji: 'pe'},
      { Katakana: "ポ", Romaji: 'po'}
    ];
    const katakanaCombinationsData = [
      { Katakana: "キャ", Romaji: 'kya'},
      { Katakana: "キュ", Romaji: 'kyu'},
      { Katakana: "キョ", Romaji: 'kyo'},
      { Katakana: "ギャ", Romaji: 'gya'},
      { Katakana: "ギュ", Romaji: 'gyu'},
      { Katakana: "ギョ", Romaji: 'gyo'},
      { Katakana: "シャ", Romaji: 'sha'},
      { Katakana: "シュ", Romaji: 'shu'},
      { Katakana: "ショ", Romaji: 'sho'},
      { Katakana: "ジャ", Romaji: 'ja'},
      { Katakana: "ジュ", Romaji: 'ju'},
      { Katakana: "ジョ", Romaji: 'jo'},
      { Katakana: "チャ", Romaji: 'cha'},
      { Katakana: "チュ", Romaji: 'chu'},
      { Katakana: "チョ", Romaji: 'cho'},
      { Katakana: "ニャ", Romaji: 'nya'},
      { Katakana: "ニュ", Romaji: 'nyu'},
      { Katakana: "ニョ", Romaji: 'nyo'},
      { Katakana: "ヒャ", Romaji: 'hya'},
      { Katakana: "ヒュ", Romaji: 'hyu'},
      { Katakana: "ヒョ", Romaji: 'hyo'},
      { Katakana: "ビャ", Romaji: 'bya'},
      { Katakana: "ビュ", Romaji: 'byu'},
      { Katakana: "ビョ", Romaji: 'byo'},
      { Katakana: "ピャ", Romaji: 'pya'},
      { Katakana: "ピュ", Romaji: 'pyu'},
      { Katakana: "ピョ", Romaji: 'pyo'},
      { Katakana: "ミャ", Romaji: 'mya'},
      { Katakana: "ミュ", Romaji: 'myu'},
      { Katakana: "ミョ", Romaji: 'myo'},
      { Katakana: "リャ", Romaji: 'rya'},
      { Katakana: "リュ", Romaji: 'ryu'},
      { Katakana: "リョ", Romaji: 'ryo'}
    ];
    res.render('katakana/katakana_list', { user: req.user, katakana: katakanaData, katakana_combinations: katakanaCombinationsData, katakana_dakuten: katakanaDakuten});
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getKatakanaQuizLvl = async (req, res) => {
  try {
    res.render('katakana/katakana_quiz_lvl', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};