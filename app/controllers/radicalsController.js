const passport = require('passport');
const User = require('../models/user');
const dotenv = require('dotenv');

dotenv.config();

exports.getRadicals = async (req, res) => {
  try {
    res.render('radicals', { user: req.user });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getRadicalsList = async (req, res) => {
  try {
    const radicalsData = [
      { Radical: "一", Romaji: "ichi", Meaning: "one" },
      { Radical: "⼁", Romaji: "bou", Meaning: "stick" },
      { Radical: "⼂", Romaji: "ten", Meaning: "point" },
      { Radical: "⼃", Romaji: "no", Meaning: "no kammuri" },
      { Radical: "⼄⺃", Romaji: "otsu, tsuribari", Meaning: "hook" },
      { Radical: "⼅", Romaji: "hane bou, kagi", Meaning: "spike" },
      { Radical: "⼆", Romaji: "ni", Meaning: "two" },
      { Radical: "⼇", Romaji: "nabeuta", Meaning: "lid" },
      { Radical: "⼈⺅", Romaji: "hito, nimben, hitoyane, hitogashira", Meaning: "human" },
      { Radical: "⼉", Romaji: "hitoashi", Meaning: "legs" },
      { Radical: "⼊", Romaji: "iru, iriyane, irigashira", Meaning: "to enter" },
      { Radical: "⼋", Romaji: "hachi, hachigashira", Meaning: "eight" },
      { Radical: "⼌", Romaji: "dougamae, makigamae, keigamae", Meaning: "turned over box" },
      { Radical: "⼍", Romaji: "wakammuri", Meaning: "katakana wa" },
      { Radical: "⼎", Romaji: "nisui", Meaning: "water" },
      { Radical: "⼏", Romaji: "tsukue, kinyou, kazegamae", Meaning: "tsukue/kinyou: desk, kazegamae: wind" },
      { Radical: "⼐", Romaji: "ukebako, kangamae", Meaning: "open box" },
      { Radical: "⼑⺉", Romaji: "katana, rittou", Meaning: "sword" },
      { Radical: "⼒", Romaji: "chikara", Meaning: "power" },
      { Radical: "⼓", Romaji: "tsutsumigamae", Meaning: "to wrap" },
      { Radical: "⼔", Romaji: "saji, hi", Meaning: "saji: spoon, hi: katakana" },
      { Radical: "⼕", Romaji: "hakogamae", Meaning: "box turned to the side" },
      { Radical: "⼖", Romaji: "kakushigamae", Meaning: "to hide" },
      { Radical: "⼗", Romaji: "jyuu", Meaning: "ten" },
      { Radical: "⼘", Romaji: "uranai, to", Meaning: "uranai: to foretell, to: katakana" },
      { Radical: "⼙", Romaji: "warifu, fushizukuri", Meaning: "stamp" },
      { Radical: "⼚", Romaji: "gandare", Meaning: "clif, 'wild goose'" },
      { Radical: "⼛", Romaji: "mu", Meaning: "katakana mu" },
      { Radical: "⼜", Romaji: "mata", Meaning: "again" },
      { Radical: "⼝", Romaji: "kuchi", Meaning: "mouth" },
      { Radical: "囗", Romaji: "kunigamae", Meaning: "square" },
      { Radical: "土", Romaji: "tsuchi, tsuchi hen", Meaning: "earth" },
      { Radical: "士", Romaji: "samurai", Meaning: "samurai" },
      { Radical: "夂", Romaji: "suinyō, fuyugashira, natsuashi", Meaning: "suinyō, fuyugashira: winter, natsuashi: 'legs' of the summer character" },
      { Radical: "夊", Romaji: "sui, yuku", Meaning: "to go" },
      { Radical: "夕", Romaji: "yuube, ta", Meaning: "yuube: evening, ta: katakana" },
      { Radical: "大", Romaji: "dai, dai kashira", Meaning: "big" },
      { Radical: "女", Romaji: "onna, onna hen", Meaning: "women" },
      { Radical: "子", Romaji: "ko", Meaning: "child" },
      { Radical: "宀", Romaji: "u kammuri", Meaning: "katakana u" },
      { Radical: "寸", Romaji: "sun", Meaning: "japanese measurement unit" },
      { Radical: "小", Romaji: "shou", Meaning: "small" },
      { Radical: "尢", Romaji: "dai no mageashi", Meaning: "'big' on cracked legs" },
      { Radical: "女", Romaji: "onna, onna hen", Meaning: "women" },
      { Radical: "尸", Romaji: "kabane, shikabane", Meaning: "body, 'flag'" },
      { Radical: "屮", Romaji: "furukusa", Meaning: "old grass" },
      { Radical: "山", Romaji: "yama, yama hen", Meaning: "mountain" },
      { Radical: "川巛", Romaji: "kawa, sambon kawa", Meaning: "river" },
      { Radical: "工", Romaji: "e, takumi hen", Meaning: "katakana e" },
      { Radical: "己已巳", Romaji: "onore, sude ni, mi", Meaning: "onore: me, sude ni: now, mi: snake" },
      { Radical: "巾", Romaji: "haba, haba hen, kin, kimben", Meaning: "material" },
      { Radical: "干", Romaji: "kan, ichijuu", Meaning: "kan: dry, ichijuu: one and ten" },
      { Radical: "幺", Romaji: "itogashira, youhen", Meaning: "'short thread'" },
      { Radical: "广", Romaji: "yama, yama hen", Meaning: "clif 'with a line'" }
    ];
    res.render('radicals/radicals_list', { user: req.user, radicals: radicalsData });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};