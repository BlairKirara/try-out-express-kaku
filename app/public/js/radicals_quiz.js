const radicalsData = [
    { Radical: "一", Reading: "いち", Meaning: "one, horizontal stroke" },
    { Radical: "⼁", Reading: "たてぼう", Meaning: "vertical stroke" },
    { Radical: "⼂", Reading: "てん", Meaning: "dot" },
    { Radical: "⼃", Reading: "の", Meaning: "diagonal sweeping stroke" },
    { Radical: "", Reading: "のかんむり", Meaning: "diagonal sweeping stroke" },
    { Radical: "⼄", Reading: "おつ", Meaning: "the second" },
    { Radical: "⺃", Reading: "おつ", Meaning: "the second" },
    { Radical: "⼅", Reading: "はねぼう", Meaning: "vertical stroke with a hook" },
    { Radical: "⼆", Reading: "に", Meaning: "two" },
    { Radical: "⼇", Reading: "なべぶた", Meaning: "lid, top" },
    { Radical: "⼈", Reading: "ひと", Meaning: "person" },
    { Radical: "⺅", Reading: "にんべん", Meaning: "person" },
    { Radical: "𠆢", Reading: "ひとやね", Meaning: "person" },
    { Radical: "⼉", Reading: "ひとあし", Meaning: "human legs" },
    { Radical: "⼊", Reading: "いる", Meaning: "to enter" },
    { Radical: "⼋", Reading: "はち", Meaning: "eight" },
    { Radical: "", Reading: "はちがしら", Meaning: "eight" },
    { Radical: "⼌", Reading: "けいがまえ", Meaning: "to enclose" },
    { Radical: "⼍", Reading: "わかんむり", Meaning: "cover, crown" },
    { Radical: "⼎", Reading: "にすい", Meaning: "ice" },
    { Radical: "⼏", Reading: "きにょう", Meaning: "table" },
    { Radical: "⺇", Reading: "かぜかんむり", Meaning: "wind" },
    { Radical: "⼐", Reading: "かんにょう", Meaning: "container, open box" },
    { Radical: "⼑", Reading: "かたな", Meaning: "knife, sword" },
    { Radical: "⺉", Reading: "りっとう", Meaning: "knife, sword" },
    { Radical: "⼒", Reading: "ちから", Meaning: "power" },
    { Radical: "⼓", Reading: "つつみがまえ", Meaning: "to wrap" },
    { Radical: "⼔", Reading: "さじ", Meaning: "spoon" },
    { Radical: "⼕", Reading: "はこがまえ", Meaning: "box" },
    { Radical: "⼖", Reading: "かくしがまえ", Meaning: "to conceal, hide" },
    { Radical: "⼗", Reading: "じゅう", Meaning: "ten" },
    { Radical: "⼘", Reading: "ぼく", Meaning: "oracle" },
    { Radical: "⼙", Reading: "ふしづくり", Meaning: "stamp, seal" },
    { Radical: "⼚", Reading: "がんだれ", Meaning: "cliff" },
    { Radical: "⼛", Reading: "む", Meaning: "private, Katakana Mu" },
    { Radical: "⼜", Reading: "また", Meaning: "again, right hand" },
    { Radical: "⼝", Reading: "くち", Meaning: "mouth" },
    { Radical: "", Reading: "くちへん", Meaning: "mouth" },
    { Radical: "⼞", Reading: "くにがまえ", Meaning: "border, territorial boundaries" },
    { Radical: "⼟", Reading: "つち", Meaning: "earth" },
    { Radical: "", Reading: "つちへん", Meaning: "earth" },
    { Radical: "⼠", Reading: "さむらい", Meaning: "man, scholar, samurai" },
    { Radical: "", Reading: "さむらいかんむり", Meaning: "man, scholar, samurai" },
    { Radical: "⼡", Reading: "のまた", Meaning: "to follow" },
    { Radical: "⼢", Reading: "なつあし", Meaning: "to go slowly" },
    { Radical: "⼣", Reading: "ゆうべ", Meaning: "evening" },
    { Radical: "⼤", Reading: "だい", Meaning: "large, big" },
    { Radical: "⼥", Reading: "おんな", Meaning: "woman" },
    { Radical: "", Reading: "おんなへん", Meaning: "woman" },
    { Radical: "⼦", Reading: "こ", Meaning: "child, son" },
    { Radical: "", Reading: "こへん", Meaning: "child, son" },
    { Radical: "⼧", Reading: "うかんむり", Meaning: "roof, house" },
    { Radical: "⼨", Reading: "すん", Meaning: "inch, (2.25 cm)" },
    { Radical: "", Reading: "すんづくり", Meaning: "inch, (2.25 cm)" },
    { Radical: "⼩", Reading: "しょう", Meaning: "small" },
    { Radical: "⺌", Reading: "しょうかんむり", Meaning: "small" },
    { Radical: "⺐", Reading: "だいのまげあし", Meaning: "lame leg" },
    { Radical: "⼫", Reading: "しかばね", Meaning: "corpse, awning" },
    { Radical: "⼬", Reading: "くさのめ", Meaning: "sprout" },
    { Radical: "⼭", Reading: "やま", Meaning: "mountain" },
    { Radical: "", Reading: "やまへん", Meaning: "mountain" },
    { Radical: "", Reading: "やまかんむり", Meaning: "mountain" },
    { Radical: "⼮", Reading: "まがりがわ", Meaning: "winding river" },
    { Radical: "川", Reading: "さんぼんがわ", Meaning: "river" },
    { Radical: "⼯", Reading: "たくみ", Meaning: "work, carpenter, skill" },
    { Radical: "", Reading: "たくみへん", Meaning: "work, carpenter, skill" },
    { Radical: "⼰", Reading: "おのれ", Meaning: "self" },
    { Radical: "⼱", Reading: "はば", Meaning: "cloth" },
    { Radical: "", Reading: "はばへん", Meaning: "cloth" },
    { Radical: "⼲", Reading: "かん", Meaning: "to dry, shield" },
    { Radical: "⺓", Reading: "いとがしら", Meaning: "young, slight" },
    { Radical: "⼴", Reading: "まだれ", Meaning: "slanting roof" },
    { Radical: "⼵", Reading: "えんにょう", Meaning: "to move, stretch" },
    { Radical: "⼶", Reading: "にじゅうあし", Meaning: "folded hands" },
    { Radical: "⼷", Reading: "いぐるみ", Meaning: "javelin" },
    { Radical: "⼸", Reading: "ゆみ", Meaning: "bow （in archery）" },
    { Radical: "", Reading: "ゆみへん", Meaning: "bow （in archery）" },
    { Radical: "⼹", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⺕", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⺔", Reading: "けいがしら", Meaning: "pig’s head" },
    { Radical: "⼺", Reading: "さんづくり", Meaning: "hair-style, light rays" },
    { Radical: "⼻", Reading: "ぎょうにんべん", Meaning: "step, stride, street, to go" },
    { Radical: "⺾", Reading: "くさかんむり", Meaning: "grass" },
    { Radical: "⻌", Reading: "しんにょう", Meaning: "road, walk, to advance" },
    { Radical: "⻏", Reading: "おおざと", Meaning: "village, country, city" },
    { Radical: "⻖", Reading: "こざとへん", Meaning: "hill, mound" },
    { Radical: "⺍", Reading: "つ", Meaning: "Katakana Tsu" },
    { Radical: "⺖", Reading: "りっしんべん", Meaning: "heart, mind, spirit" },
    { Radical: "⺘", Reading: "てへん", Meaning: "hand" },
    { Radical: "⺡", Reading: "さんずい", Meaning: "water" },
    { Radical: "⺨", Reading: "けものへん", Meaning: "beast" }
  ];
  
  let randomRadical;
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 25;
  
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
  
      let correctMeaning = randomRadical.Meaning;
      let meanings = [];
  
      // Ensure unique meanings
      while (meanings.length < 2) {
        let randomMeaning = getRandomMeaning();
        if (!meanings.includes(randomMeaning) && randomMeaning !== correctMeaning) {
          meanings.push(randomMeaning);
        }
      }
      meanings.push(correctMeaning);
  
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
  