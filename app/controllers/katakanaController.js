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
      { Katakana: "ア", Romaji: 'a', Dakuten: "-", Handakuten: "-" },
      { Katakana: "イ", Romaji: 'i', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ウ", Romaji: 'u', Dakuten: "-", Handakuten: "-" },
      { Katakana: "エ", Romaji: 'e', Dakuten: "-", Handakuten: "-" },
      { Katakana: "オ", Romaji: 'o', Dakuten: "-", Handakuten: "-" },
      { Katakana: "カ", Romaji: 'ka', Dakuten: "ガ (ga)", Handakuten: "-" },
      { Katakana: "キ", Romaji: 'ki', Dakuten: "ギ (gi)", Handakuten: "-" },
      { Katakana: "ク", Romaji: 'ku', Dakuten: "グ (gu)", Handakuten: "-" },
      { Katakana: "ケ", Romaji: 'ke', Dakuten: "ゲ (ge)", Handakuten: "-" },
      { Katakana: "コ", Romaji: 'ko', Dakuten: "ゴ (go)", Handakuten: "-" },
      { Katakana: "サ", Romaji: 'sa', Dakuten: "ザ (za)", Handakuten: "-" },
      { Katakana: "シ", Romaji: 'shi', Dakuten: "ジ (ji)", Handakuten: "-" },
      { Katakana: "ス", Romaji: 'su', Dakuten: "ズ (zu)", Handakuten: "-" },
      { Katakana: "セ", Romaji: 'se', Dakuten: "ゼ (ze)", Handakuten: "-" },
      { Katakana: "ソ", Romaji: 'so', Dakuten: "ゾ (zo)", Handakuten: "-" },
      { Katakana: "タ", Romaji: 'ta', Dakuten: "ダ (da)", Handakuten: "-" },
      { Katakana: "チ", Romaji: 'chi', Dakuten: "ヂ (ji)", Handakuten: "-" },
      { Katakana: "ツ", Romaji: 'tsu', Dakuten: "ヅ (zu)", Handakuten: "-" },
      { Katakana: "テ", Romaji: 'te', Dakuten: "デ (de)", Handakuten: "-" },
      { Katakana: "ト", Romaji: 'to', Dakuten: "ド (do)", Handakuten: "-" },
      { Katakana: "ナ", Romaji: 'na', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ニ", Romaji: 'ni', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ヌ", Romaji: 'nu', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ネ", Romaji: 'ne', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ノ", Romaji: 'no', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ハ", Romaji: 'ha', Dakuten: "バ (ba)", Handakuten: "パ (pa)" },
      { Katakana: "ヒ", Romaji: 'hi', Dakuten: "ビ (bi)", Handakuten: "ピ (pi)" },
      { Katakana: "フ", Romaji: 'fu', Dakuten: "ブ (bu)", Handakuten: "プ (pu)" },
      { Katakana: "ヘ", Romaji: 'he', Dakuten: "ベ (be)", Handakuten: "ペ (pe)" },
      { Katakana: "ホ", Romaji: 'ho', Dakuten: "ボ (bo)", Handakuten: "ポ (po)" },
      { Katakana: "マ", Romaji: 'ma', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ミ", Romaji: 'mi', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ム", Romaji: 'mu', Dakuten: "-", Handakuten: "-" },
      { Katakana: "メ", Romaji: 'me', Dakuten: "-", Handakuten: "-" },
      { Katakana: "モ", Romaji: 'mo', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ヤ", Romaji: 'ya', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ユ", Romaji: 'yu', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ヨ", Romaji: 'yo', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ラ", Romaji: 'ra', Dakuten: "-", Handakuten: "-" },
      { Katakana: "リ", Romaji: 'ri', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ル", Romaji: 'ru', Dakuten: "-", Handakuten: "-" },
      { Katakana: "レ", Romaji: 're', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ロ", Romaji: 'ro', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ワ", Romaji: 'wa', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ヲ", Romaji: 'wo', Dakuten: "-", Handakuten: "-" },
      { Katakana: "ン", Romaji: 'n', Dakuten: "-", Handakuten: "-" }
    ];
    res.render('katakana/katakana_list', { katakana: katakanaData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};