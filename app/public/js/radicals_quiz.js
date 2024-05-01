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
  
  let randomRadical;
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 50;
  
  function getRandomRadical() {
    randomRadical = radicalsData[Math.floor(Math.random() * radicalsData.length)];
  }
  
  function displayQuestion() {
    questionCount++;
    if (questionCount <= number_of_questions) {
      getRandomRadical();
      let question = randomRadical.Radical;
      document.getElementById('question').innerText = question;
      document.getElementById('answer1').innerText = getRandomMeaning();
      document.getElementById('answer2').innerText = getRandomMeaning();
      document.getElementById('answer3').innerText = randomRadical.Meaning;
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
  