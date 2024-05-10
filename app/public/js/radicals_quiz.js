const radicalsData = [
  { Radical: "一", Romaji: "ichi", Meaning: "one" },
  { Radical: "丨", Romaji: "bō", Meaning: "pole" },
  { Radical: "ヽ", Romaji: "ten", Meaning: "dot" },
  { Radical: "ノ", Romaji: "no", Meaning: "roof" },
  { Radical: "乙", Romaji: "otsu", Meaning: "hook" },
  { Radical: "乚", Romaji: "otsu", Meaning: "hook" },
  { Radical: "亅", Romaji: "hane", Meaning: "barb" },
  { Radical: "二", Romaji: "ni", Meaning: "two" },
  { Radical: "亠", Romaji: "nabeuta", Meaning: "lid" },
  { Radical: "人", Romaji: "hito", Meaning: "person" },
  { Radical: "亻", Romaji: "jin", Meaning: "person" },
  { Radical: "儿", Romaji: "naka", Meaning: "legs" },
  { Radical: "入", Romaji: "iri", Meaning: "enter" },
  { Radical: "八", Romaji: "hachi", Meaning: "eight" },
  { Radical: "冂", Romaji: "kyō", Meaning: "down box" },
  { Radical: "冖", Romaji: "mi", Meaning: "cover" },
  { Radical: "冫", Romaji: "hyō", Meaning: "ice" },
  { Radical: "几", Romaji: "kyo", Meaning: "table" },
  { Radical: "凵", Romaji: "kan", Meaning: "open box" },
  { Radical: "刀", Romaji: "katana", Meaning: "knife" },
  { Radical: "力", Romaji: "chikara", Meaning: "power" },
  { Radical: "勹", Romaji: "hō", Meaning: "wrap" },
  { Radical: "匕", Romaji: "sa", Meaning: "spoon" },
  { Radical: "匚", Romaji: "hako", Meaning: "box" },
  { Radical: "匸", Romaji: "kakushi", Meaning: "hide" },
  { Radical: "十", Romaji: "jū", Meaning: "ten" },
  { Radical: "卜", Romaji: "boku", Meaning: "divination" },
  { Radical: "卩", Romaji: "hane", Meaning: "seal" },
  { Radical: "厂", Romaji: "gai", Meaning: "cliff" },
  { Radical: "厶", Romaji: "shi", Meaning: "private" },
  { Radical: "又", Romaji: "mata", Meaning: "again" },
  { Radical: "口", Romaji: "kuchi", Meaning: "mouth" },
  { Radical: "囗", Romaji: "kunigamae", Meaning: "enclosure" },
  { Radical: "土", Romaji: "tsuchi", Meaning: "earth" },
  { Radical: "士", Romaji: "shi", Meaning: "samurai" },
  { Radical: "夂", Romaji: "tsugi", Meaning: "winter" },
  { Radical: "夊", Romaji: "sui", Meaning: "go" },
  { Radical: "夕", Romaji: "yū", Meaning: "evening" },
  { Radical: "大", Romaji: "dai", Meaning: "big" },
  { Radical: "女", Romaji: "onna", Meaning: "woman" },
  { Radical: "子", Romaji: "ko", Meaning: "child" },
  { Radical: "宀", Romaji: "mune", Meaning: "roof" },
  { Radical: "寸", Romaji: "sun", Meaning: "measurement" },
  { Radical: "小", Romaji: "shō", Meaning: "small" },
  { Radical: "尢", Romaji: "yō", Meaning: "lame" },
  { Radical: "尸", Romaji: "shikabane", Meaning: "corpse" },
  { Radical: "屮", Romaji: "tatsu", Meaning: "sprout" },
  { Radical: "山", Romaji: "yama", Meaning: "mountain" },
  { Radical: "川", Romaji: "kawa", Meaning: "river" },
  { Radical: "工", Romaji: "kō", Meaning: "work" },
  { Radical: "己", Romaji: "ono", Meaning: "self" },
  { Radical: "巾", Romaji: "kin", Meaning: "towel" },
  { Radical: "干", Romaji: "kan", Meaning: "dry" },
  { Radical: "幺", Romaji: "itoga", Meaning: "short thread" },
  { Radical: "广", Romaji: "madare", Meaning: "dotted cliff" },
  { Radical: "廴", Romaji: "en", Meaning: "prolonged" },
  { Radical: "廾", Romaji: "kazaru", Meaning: "two hands" },
  { Radical: "弋", Romaji: "shoku", Meaning: "shoot" },
  { Radical: "弓", Romaji: "yumi", Meaning: "bow" },
  { Radical: "彐", Romaji: "kei", Meaning: "pig" },
  { Radical: "彡", Romaji: "san", Meaning: "hair" },
  { Radical: "彳", Romaji: "chokkan", Meaning: "step" },
  { Radical: "心", Romaji: "kokoro", Meaning: "heart" },
  { Radical: "戈", Romaji: "hoko", Meaning: "spear" },
  { Radical: "戸", Romaji: "to", Meaning: "door" },
  { Radical: "手", Romaji: "te", Meaning: "hand" },
  { Radical: "支", Romaji: "shi", Meaning: "branch" },
  { Radical: "攴", Romaji: "boku", Meaning: "strike" },
  { Radical: "文", Romaji: "bun", Meaning: "script" },
  { Radical: "斗", Romaji: "to", Meaning: "dipper" },
  { Radical: "斤", Romaji: "kin", Meaning: "axe" },
  { Radical: "方", Romaji: "hō", Meaning: "direction" },
  { Radical: "旡", Romaji: "mu", Meaning: "not" },
  { Radical: "日", Romaji: "nichi", Meaning: "sun" },
  { Radical: "曰", Romaji: "ii", Meaning: "say" },
  { Radical: "月", Romaji: "getsu", Meaning: "moon" },
  { Radical: "木", Romaji: "ki", Meaning: "tree" },
  { Radical: "欠", Romaji: "ketsu", Meaning: "lack" },
  { Radical: "止", Romaji: "tomaru", Meaning: "stop" },
  { Radical: "歹", Romaji: "dai", Meaning: "death" },
  { Radical: "殳", Romaji: "hoko", Meaning: "weapon" },
  { Radical: "毌", Romaji: "kawa", Meaning: "mother" },
  { Radical: "比", Romaji: "hikusa", Meaning: "compare" },
  { Radical: "毛", Romaji: "ke", Meaning: "fur" },
  { Radical: "氏", Romaji: "uji", Meaning: "clan" },
  { Radical: "气", Romaji: "ki", Meaning: "steam" },
  { Radical: "水", Romaji: "mizu", Meaning: "water" },
  { Radical: "火", Romaji: "hi", Meaning: "fire" },
  { Radical: "爪", Romaji: "tsume", Meaning: "claw" },
  { Radical: "父", Romaji: "chichi", Meaning: "father" },
  { Radical: "爻", Romaji: "kai", Meaning: "crossroads" },
  { Radical: "爿", Romaji: "shinnyō", Meaning: "half tree" },
  { Radical: "片", Romaji: "hen", Meaning: "slice" },
  { Radical: "牙", Romaji: "kiba", Meaning: "fang" },
  { Radical: "牛", Romaji: "ushi", Meaning: "cow" },
  { Radical: "犬", Romaji: "inu", Meaning: "dog" },
  { Radical: "玄", Romaji: "gen", Meaning: "mysterious" },
  { Radical: "玉", Romaji: "gyoku", Meaning: "jewel" },
  { Radical: "瓜", Romaji: "uri", Meaning: "melon" },
  { Radical: "瓦", Romaji: "kawara", Meaning: "tile" },
  { Radical: "甘", Romaji: "amai", Meaning: "sweet" },
  { Radical: "生", Romaji: "sei", Meaning: "life" },
  { Radical: "用", Romaji: "yō", Meaning: "use" },
  { Radical: "田", Romaji: "ta", Meaning: "rice field" },
  { Radical: "疋", Romaji: "hiki", Meaning: "animal legs" },
  { Radical: "疒", Romaji: "yamaidare", Meaning: "illness" },
  { Radical: "癶", Romaji: "hatsu", Meaning: "depart" },
  { Radical: "白", Romaji: "shiro", Meaning: "white" },
  { Radical: "皮", Romaji: "kawa", Meaning: "skin" },
  { Radical: "皿", Romaji: "sara", Meaning: "dish" },
  { Radical: "目", Romaji: "me", Meaning: "eye" },
  { Radical: "矛", Romaji: "hoko", Meaning: "halberd" },
  { Radical: "矢", Romaji: "ya", Meaning: "arrow" },
  { Radical: "石", Romaji: "ishi", Meaning: "stone" },
  { Radical: "示", Romaji: "shimesu", Meaning: "show" },
  { Radical: "禸", Romaji: "gū", Meaning: "track" },
  { Radical: "禾", Romaji: "no", Meaning: "grain" },
  { Radical: "穴", Romaji: "ana", Meaning: "hole" },
  { Radical: "立", Romaji: "tatsu", Meaning: "stand" },
  { Radical: "竹", Romaji: "take", Meaning: "bamboo" },
  { Radical: "米", Romaji: "kome", Meaning: "rice" },
  { Radical: "糸", Romaji: "ito", Meaning: "thread" },
  { Radical: "缶", Romaji: "kan", Meaning: "can" },
  { Radical: "网", Romaji: "mou", Meaning: "net" },
  { Radical: "羊", Romaji: "hitsuji", Meaning: "sheep" },
  { Radical: "羽", Romaji: "hane", Meaning: "feather" },
  { Radical: "老", Romaji: "oi", Meaning: "old" },
  { Radical: "而", Romaji: "shikashite", Meaning: "and yet" },
  { Radical: "耒", Romaji: "suki", Meaning: "plow" },
  { Radical: "耳", Romaji: "mimi", Meaning: "ear" },
  { Radical: "聿", Romaji: "fude", Meaning: "brush" },
  { Radical: "肉", Romaji: "niku", Meaning: "meat" },
  { Radical: "臣", Romaji: "shin", Meaning: "minister" },
  { Radical: "自", Romaji: "ji", Meaning: "self" },
  { Radical: "至", Romaji: "ita", Meaning: "arrive" },
  { Radical: "臼", Romaji: "usu", Meaning: "mortar" },
  { Radical: "舌", Romaji: "shita", Meaning: "tongue" },
  { Radical: "舛", Romaji: "mai", Meaning: "oppose" },
  { Radical: "舟", Romaji: "fune", Meaning: "boat" },
  { Radical: "艮", Romaji: "gon", Meaning: "stopping" },
  { Radical: "色", Romaji: "shoku", Meaning: "color" },
  { Radical: "艸", Romaji: "kusa", Meaning: "grass" },
  { Radical: "虍", Romaji: "tora", Meaning: "tiger" },
  { Radical: "虫", Romaji: "mushi", Meaning: "insect" },
  { Radical: "血", Romaji: "chi", Meaning: "blood" },
  { Radical: "行", Romaji: "gyō", Meaning: "go" },
  { Radical: "衣", Romaji: "koromo", Meaning: "clothes" },
  { Radical: "西", Romaji: "nishi", Meaning: "west" },
  { Radical: "見", Romaji: "ken", Meaning: "see" },
  { Radical: "角", Romaji: "kaku", Meaning: "angle" },
  { Radical: "言", Romaji: "gen", Meaning: "say" },
  { Radical: "谷", Romaji: "tani", Meaning: "valley" },
  { Radical: "豆", Romaji: "mame", Meaning: "bean" },
  { Radical: "豕", Romaji: "buta", Meaning: "pig" },
  { Radical: "豸", Romaji: "mujina", Meaning: "badger" },
  { Radical: "貝", Romaji: "kai", Meaning: "shellfish" },
  { Radical: "赤", Romaji: "aka", Meaning: "red" },
  { Radical: "走", Romaji: "hashiru", Meaning: "run" },
  { Radical: "足", Romaji: "ashi", Meaning: "foot" },
  { Radical: "身", Romaji: "shin", Meaning: "body" },
  { Radical: "車", Romaji: "kuruma", Meaning: "car" },
  { Radical: "辛", Romaji: "karai", Meaning: "spicy" },
  { Radical: "辰", Romaji: "tatsu", Meaning: "dragon" },
  { Radical: "辵", Romaji: "shinnyō", Meaning: "walk" },
  { Radical: "邑", Romaji: "oku", Meaning: "city" },
  { Radical: "酉", Romaji: "tori", Meaning: "bird" },
  { Radical: "釆", Romaji: "bun", Meaning: "rice" },
  { Radical: "里", Romaji: "sato", Meaning: "village" },
  { Radical: "金", Romaji: "kin", Meaning: "gold" },
  { Radical: "長", Romaji: "naga", Meaning: "long" },
  { Radical: "門", Romaji: "mon", Meaning: "gate" },
  { Radical: "阜", Romaji: "takane", Meaning: "mound" },
  { Radical: "隶", Romaji: "reisho", Meaning: "slave" },
  { Radical: "隹", Romaji: "tori", Meaning: "bird" },
  { Radical: "雨", Romaji: "ame", Meaning: "rain" },
  { Radical: "青", Romaji: "ao", Meaning: "blue" },
  { Radical: "非", Romaji: "hi", Meaning: "negative" },
  { Radical: "面", Romaji: "men", Meaning: "face" },
  { Radical: "革", Romaji: "kawa", Meaning: "leather" },
  { Radical: "韋", Romaji: "i", Meaning: "tanned leather" },
  { Radical: "韭", Romaji: "nira", Meaning: "leek" },
  { Radical: "音", Romaji: "oto", Meaning: "sound" },
  { Radical: "頭", Romaji: "zukin", Meaning: "head" },
  { Radical: "頁", Romaji: "peiji", Meaning: "page" },
  { Radical: "風", Romaji: "kaze", Meaning: "wind" },
  { Radical: "飛", Romaji: "tobu", Meaning: "fly" },
  { Radical: "食", Romaji: "shoku", Meaning: "eat" },
  { Radical: "首", Romaji: "kubi", Meaning: "neck" },
  { Radical: "香", Romaji: "kō", Meaning: "fragrance" },
  { Radical: "馬", Romaji: "uma", Meaning: "horse" },
  { Radical: "骨", Romaji: "hone", Meaning: "bone" },
  { Radical: "高", Romaji: "taka", Meaning: "high" },
  { Radical: "髟", Romaji: "ke", Meaning: "hair" },
  { Radical: "鬥", Romaji: "tō", Meaning: "fight" },
  { Radical: "鬯", Romaji: "shu", Meaning: "liquor" },
  { Radical: "鬼", Romaji: "ki", Meaning: "demon" },
  { Radical: "魚", Romaji: "sakana", Meaning: "fish" },
  { Radical: "鳥", Romaji: "tori", Meaning: "bird" },
  { Radical: "鹵", Romaji: "shio", Meaning: "salt" },
  { Radical: "鹿", Romaji: "shika", Meaning: "deer" },
  { Radical: "麦", Romaji: "mugi", Meaning: "wheat" },
  { Radical: "麻", Romaji: "asa", Meaning: "hemp" },
  { Radical: "黄", Romaji: "ki", Meaning: "yellow" },
  { Radical: "黍", Romaji: "kibi", Meaning: "millet" },
  { Radical: "黒", Romaji: "kuro", Meaning: "black" },
  { Radical: "黹", Romaji: "nuu", Meaning: "embroidery" },
  { Radical: "黽", Romaji: "ao", Meaning: "frog" },
  { Radical: "鼎", Romaji: "kanae", Meaning: "tripod" },
  { Radical: "鼓", Romaji: "tsuzumi", Meaning: "drum" },
  { Radical: "鼠", Romaji: "nezumi", Meaning: "mouse" },
  { Radical: "鼻", Romaji: "hana", Meaning: "nose" },
  { Radical: "斉", Romaji: "sai, hitoshii", Meaning: "similar; 'Mr. Saito'" },
  { Radical: "歯", Romaji: "ha", Meaning: "tooth" },
  { Radical: "竜", Romaji: "tatsu", Meaning: "dragon, 'big dragon'" },
  { Radical: "亀", Romaji: "kame", Meaning: "turtle" },
  { Radical: "龠", Romaji: "fue", Meaning: "flute" }
  ];
  
  let randomRadical;
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 50;
  
  function getRandomRadical() {
    randomRadical = radicalsData[Math.floor(Math.random() * radicalsData.length)];
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function displayQuestion() {
    questionCount++;
    if (questionCount <= number_of_questions) {
      getRandomRadical();
      let question = randomRadical.Radical;
      document.getElementById('question').innerText = question;
  
      let meanings = [getRandomMeaning(), getRandomMeaning(), randomRadical.Meaning];

      meanings = shuffle(meanings);
  
      document.getElementById('answer1').innerText = meanings[0];
      document.getElementById('answer2').innerText = meanings[1];
      document.getElementById('answer3').innerText = meanings[2];
  
      document.getElementById('questionNumber').innerText = 'Question ' + questionCount + ' of ' + number_of_questions;
    } else {
      showScore();
    }
  }
  
  
  function getRandomMeaning() {
    let meanings = radicalsData.map(radical => radical.Meaning);
    meanings = meanings.filter(meaning => meaning !== randomRadical.Meaning);
    return meanings[Math.floor(Math.random() * meanings.length)];
  }
  
  function checkAnswer(answer) {
    let userInput = answer.trim();
    if (userInput === '') {
      document.getElementById('result').innerText = 'Please select an answer';
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').style.fontWeight = '700';
      return;
    }
    let correctAnswer = randomRadical.Meaning;
    let result = userInput === correctAnswer;
    let resultDiv = document.getElementById('result');
    if (result) {
      resultDiv.innerText = 'Correct!';
      resultDiv.style.color = 'green';
      resultDiv.style.fontWeight = '700';
      correctCount++;
    } else {
      resultDiv.innerText = 'Incorrect!';
      resultDiv.style.color = 'red';
      resultDiv.style.fontWeight = '700';
    }
    displayQuestion();
  }
  
  function showScore() {
    const lvl = 'Radicals';
    document.getElementById('question').innerText = 'Quiz finished! Your score: ' + correctCount + ' out of ' + number_of_questions;
    document.getElementById('question').style.fontSize = '30px';
    document.getElementById('go_back_to').innerText = 'Go back to:';
    document.getElementById('go_back_front').innerHTML = "<a href='/'>Front Page</a>";
    document.getElementById('go_back_katakana').innerHTML = "<a href='/radicals/list'>Radicals List</a>";
    document.getElementById('answer1').style.display = 'none';
    document.getElementById('answer2').style.display = 'none';
    document.getElementById('answer3').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('questionNumber').innerText = '';

    const percentage = ((correctCount / number_of_questions) * 100).toFixed(2);

    const scoreData = {
        score: percentage,
        lvl: lvl,
      };
    
      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/score', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log('Score posted successfully');
        } else {
          console.error('Error posting score:', xhr.statusText);
        }
      };
      xhr.onerror = function () {
        console.error('Network error while posting score');
      };
      xhr.send(JSON.stringify(scoreData));
  }
  
  displayQuestion();
  