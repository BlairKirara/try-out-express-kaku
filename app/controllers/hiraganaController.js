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
      { Hiragana: "あ", Romaji: 'a', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "い", Romaji: 'i', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "う", Romaji: 'u', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "え", Romaji: 'e', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "お", Romaji: 'o', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "か", Romaji: 'ka', Dakuten: "が (ga)", Handakuten: "-" },
      { Hiragana: "き", Romaji: 'ki', Dakuten: "ぎ (gi)", Handakuten: "-"  },
      { Hiragana: "く", Romaji: 'ku', Dakuten: "ぐ (gu)", Handakuten: "-"  },
      { Hiragana: "け", Romaji: 'ke', Dakuten: "げ (ge)", Handakuten: "-"  },
      { Hiragana: "こ", Romaji: 'ko', Dakuten: "ご (go)", Handakuten: "-"  },
      { Hiragana: "さ", Romaji: 'sa', Dakuten: "ざ (za)", Handakuten: "-" },
      { Hiragana: "し", Romaji: 'shi', Dakuten: "じ (ji)", Handakuten: "-"  },
      { Hiragana: "す", Romaji: 'su', Dakuten: "ず (zu)", Handakuten: "-"  },
      { Hiragana: "せ", Romaji: 'se', Dakuten: "ぜ (ze)", Handakuten: "-"  },
      { Hiragana: "そ", Romaji: 'so', Dakuten: "ぞ (zo)", Handakuten: "-"  },
      { Hiragana: "た", Romaji: 'ta', Dakuten: "だ (da)", Handakuten: "-" },
      { Hiragana: "ち", Romaji: 'chi', Dakuten: "ぢ (ji)", Handakuten: "-"  },
      { Hiragana: "つ", Romaji: 'tsu', Dakuten: "づ (zu)", Handakuten: "-"  },
      { Hiragana: "て", Romaji: 'te', Dakuten: "で (de)", Handakuten: "-"  },
      { Hiragana: "と", Romaji: 'to', Dakuten: "ど (do)", Handakuten: "-"  },
      { Hiragana: "な", Romaji: 'na', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "に", Romaji: 'ni', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "ぬ", Romaji: 'nu', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "ね", Romaji: 'ne', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "の", Romaji: 'no', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "は", Romaji: 'ha', Dakuten: "ば (ba)", Handakuten: "ぱ (pa)" },
      { Hiragana: "ひ", Romaji: 'hi', Dakuten: "び (bi)", Handakuten: "ぴ (pi)"  },
      { Hiragana: "ふ", Romaji: 'fu', Dakuten: "ぶ (bu)", Handakuten: "ぷ (pu)"  },
      { Hiragana: "へ", Romaji: 'he', Dakuten: "べ (be)", Handakuten: "ぺ (pe)"  },
      { Hiragana: "ほ", Romaji: 'ho', Dakuten: "ぼ (bo)", Handakuten: "ぽ (po)"  },
      { Hiragana: "ま", Romaji: 'ma', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "み", Romaji: 'mi', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "む", Romaji: 'mu', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "め", Romaji: 'me', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "も", Romaji: 'mo', Dakuten: "-", Handakuten: "-"  },
      { Hiragana: "や", Romaji: 'ya', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "ゆ", Romaji: 'yu', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "よ", Romaji: 'yo', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "ら", Romaji: 'ra', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "り", Romaji: 'ri', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "る", Romaji: 'ru', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "れ", Romaji: 're', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "ろ", Romaji: 'ro', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "わ", Romaji: 'wa', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "を", Romaji: 'wo', Dakuten: "-", Handakuten: "-" },
      { Hiragana: "ん", Romaji: 'n', Dakuten: "-", Handakuten: "-" }
    ];
    res.render('hiragana/hiragana_list', { hiragana: hiraganaData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};