const radicalsData = [
    { Radical: "⼼", Reading: "こころ", Meaning: "heart, mind, spirit" },
    { Radical: "⺗", Reading: "したごころ", Meaning: "heart, mind, spirit"},
    { Radical: "⼽", Reading: "ほこ", Meaning: "spear, weapon" },
    { Radical: "⼾", Reading: "と", Meaning: "door" },
    { Radical: "", Reading: "とだれ", Meaning: "door"},
    { Radical: "⼿", Reading: "て", Meaning: "hand" },
    { Radical: "⽀", Reading: "しにょう", Meaning: "branch" },
    { Radical: "⽁", Reading: "ぼくづくり", Meaning: "activity, to strike, hit" },
    { Radical: "⺙", Reading: "ぼくづくり", Meaning: "activity, to strike, hit"},
    { Radical: "⽂", Reading: "ぶん", Meaning: "literature, letters" },
    { Radical: "⽃", Reading: "ますづくり", Meaning: "big dipper, ladle, 18 liters" },
    { Radical: "⽄", Reading: "おのづくり", Meaning: "axe" },
    { Radical: "⽅", Reading: "ほう", Meaning: "direction, flag" },
    { Radical: "", Reading: "ほうへん", Meaning: "direction, flag"},
    { Radical: "⽆", Reading: "むにょう", Meaning: "not" },
    { Radical: "⽇", Reading: "ひ", Meaning: "sun, day, time" },
    { Radical: "", Reading: "ひへん", Meaning: "sun, day, time"},
    { Radical: "⽈", Reading: "ひらび", Meaning: "to say" },
    { Radical: "⽉", Reading: "つき", Meaning: "moon, month, period" },
    { Radical: "⺝", Reading: "つきへん", Meaning: "moon, month, period"},
    { Radical: "", Reading: "にくづき", Meaning: "meat, flesh"},
    { Radical: "⽊", Reading: "き", Meaning: "tree, wood" },
    { Radical: "", Reading: "きへん", Meaning: "tree, wood"},
    { Radical: "⽋", Reading: "あくび", Meaning: "to lack, yawn" },
    { Radical: "⽌", Reading: "とめる", Meaning: "to stop" },
    { Radical: "⽍", Reading: "がつ", Meaning: "death & dying, to decompose" },
    { Radical: "", Reading: "がつへん", Meaning: "death & dying, to decompose"},
    { Radical: "⽎", Reading: "るまた", Meaning: "lance shaft, action" },
    { Radical: "⽏", Reading: "なかれ", Meaning: "not, mother" },
    { Radical: "⽐", Reading: "くらべる", Meaning: "to compare" },
    { Radical: "⽑", Reading: "け", Meaning: "hair" },
    { Radical: "⽒", Reading: "うじ", Meaning: "family, clan" },
    { Radical: "⽓", Reading: "きがまえ", Meaning: "steam, air" },
    { Radical: "⽔", Reading: "みず", Meaning: "water" },
    { Radical: "⽕", Reading: "ひ", Meaning: "fire" },
    { Radical: "", Reading: "ひへん", Meaning: "fire"},
    { Radical: "⺣", Reading: "れっか", Meaning: "fire"},
    { Radical: "⽖", Reading: "つめ", Meaning: "claw, nail" },
    { Radical: "⺤", Reading: "つめかんむり", Meaning: "claw, nail"},
    { Radical: "爫", Reading: "つめかんむり", Meaning: "claw, nail"},
    { Radical: "⽗", Reading: "ちち", Meaning: "father" },
    { Radical: "⽘", Reading: "こう", Meaning: "to mix" },
    { Radical: "⽙", Reading: "しょうへん", Meaning: "split wood" },
    { Radical: "⽚", Reading: "かた", Meaning: "split wood" },
    { Radical: "", Reading: "かたへん", Meaning: "split wood"},
    { Radical: "", Reading: "きば", Meaning: "fang, canine tooth" },
    { Radical: "⽜", Reading: "うし", Meaning: "cow" },
    { Radical: "", Reading: "うしへん", Meaning: "cow"},
    { Radical: "⽝", Reading: "いぬ", Meaning: "dog" },
    { Radical: "", Reading: "おうへん", Meaning: "jewelry, jeweled king"},
    { Radical: "⺭", Reading: "しめすへん", Meaning: "altar, festival, religious service"},
    { Radical: "㓁", Reading: "あみがしら", Meaning: "net"},
    { Radical: "⺹", Reading: "おいかんむり", Meaning: "old, old-age"},
    { Radical: "⽞", Reading: "げん", Meaning: "darkness" },
    { Radical: "⽟", Reading: "たま", Meaning: "jewelry" },
    { Radical: "", Reading: "うり", Meaning: "melon" },
    { Radical: "⽡", Reading: "かわら", Meaning: "tile" },
    { Radical: "⽢", Reading: "あまい", Meaning: "sweet" },
    { Radical: "⽣", Reading: "うまれる", Meaning: "birth, to be born, live" },
    { Radical: "⽤", Reading: "もちいる", Meaning: "to use" },
    { Radical: "⽥", Reading: "た", Meaning: "rice paddy" },
    { Radical: "", Reading: "たへん", Meaning: "rice paddy" },
    { Radical: "⽦", Reading: "ひき", Meaning: "bolt of cloth" },
    { Radical: "⺪", Reading: "ひきへん", Meaning: "bolt of cloth" },
    { Radical: "⽧", Reading: "やまいだれ", Meaning: "sickness" },
    { Radical: "⽨", Reading: "はつがしら", Meaning: "outspread legs, departure" },
    { Radical: "⽩", Reading: "しろ", Meaning: "white" },
    { Radical: "", Reading: "はくへん", Meaning: "white" },
    { Radical: "⽪", Reading: "けがわ", Meaning: "skin, hide" },
    { Radical: "⽫", Reading: "さら", Meaning: "plate, bowl" },
    { Radical: "⽬", Reading: "め", Meaning: "eye" },
    { Radical: "", Reading: "めへん", Meaning: "eye" },
    { Radical: "", Reading: "よこめ", Meaning: "eye" },
    { Radical: "⽭", Reading: "ほこ", Meaning: "halberd" },
    { Radical: "", Reading: "ほこへん", Meaning: "halberd" },
    { Radical: "⽮", Reading: "や", Meaning: "arrow" },
    { Radical: "", Reading: "やへん", Meaning: "arrow" },
    { Radical: "⽯", Reading: "いし", Meaning: "stone" },
    { Radical: "", Reading: "いしへん", Meaning: "stone" },
    { Radical: "⽰", Reading: "しめす", Meaning: "altar, festival, religious service" },
    { Radical: "⽱", Reading: "じゅうのあし", Meaning: "footprint" },
    { Radical: "⽲", Reading: "のぎへん", Meaning: "grain" },
    { Radical: "⽳", Reading: "あな", Meaning: "hole, cave" },
    { Radical: "", Reading: "あなかんむり", Meaning: "hole, cave" },
    { Radical: "⽴", Reading: "たつ", Meaning: "to stand" },
    { Radical: "", Reading: "たつへん", Meaning: "to stand" },
    { Radical: "", Reading: "きば", Meaning: "fang, canine tooth" },
    { Radical: "", Reading: "きばへん", Meaning: "fang, canine tooth" },
    { Radical: "氺", Reading: "したみず", Meaning: "water" },
    { Radical: "⺫", Reading: "あみがしら", Meaning: "net" },
    { Radical: "𦉰", Reading: "あみがしら", Meaning: "net" },
    { Radical: "⻂", Reading: "ころもへん", Meaning: "clothing" },
    { Radical: "⺛", Reading: "むにょう", Meaning: "not" },
    { Radical: "⽵", Reading: "たけ", Meaning: "bamboo" },
    { Radical: "⺮", Reading: "たけかんむり", Meaning: "bamboo" },
    { Radical: "⽶", Reading: "こめ", Meaning: "rice" },
    { Radical: "", Reading: "こめへん", Meaning: "rice" },
    { Radical: "⽷", Reading: "いと", Meaning: "thread" },
    { Radical: "", Reading: "いとへん", Meaning: "thread" },
    { Radical: "⽸", Reading: "みずがめ", Meaning: "earthen jar" },
    { Radical: "⽹", Reading: "あみめ", Meaning: "net" },
    { Radical: "⽺", Reading: "ひつじ", Meaning: "sheep" },
    { Radical: "⺷", Reading: "ひつじ", Meaning: "sheep" },
    { Radical: "羽", Reading: "はね", Meaning: "feather, wing" },
    { Radical: "⽻", Reading: "はね", Meaning: "feather, wing" },
    { Radical: "⽼", Reading: "おいかんむり", Meaning: "old, old-age" },
    { Radical: "⽽", Reading: "しこうして", Meaning: "and also" },
    { Radical: "⽾", Reading: "らいすき", Meaning: "plow" },
    { Radical: "⽿", Reading: "みみ", Meaning: "ear" },
    { Radical: "", Reading: "みみへん", Meaning: "ear" },
    { Radical: "⾀", Reading: "ふでづくり", Meaning: "writing brush" },
    { Radical: "⾁", Reading: "にく", Meaning: "flesh, meat" },
    { Radical: "⾂", Reading: "しん", Meaning: "retainer, minister" },
    { Radical: "⾃", Reading: "みずから", Meaning: "self" },
    { Radical: "⾄", Reading: "いたる", Meaning: "to arrive, reach" },
    { Radical: "", Reading: "いたるへん", Meaning: "to arrive, reach" },
    { Radical: "⾅", Reading: "うす", Meaning: "mortar, quern" },
    { Radical: "⾆", Reading: "した", Meaning: "tongue" },
    { Radical: "⾇", Reading: "まいあし", Meaning: "contrary, to err" },
    { Radical: "⾈", Reading: "ふね", Meaning: "ship, boat" },
    { Radical: "", Reading: "ふねへん", Meaning: "ship, boat" },
    { Radical: "⾉", Reading: "こん", Meaning: "boundary" },
    { Radical: "⾊", Reading: "いろ", Meaning: "color" },
    { Radical: "⾋", Reading: "くさ", Meaning: "grass, plant" },
    { Radical: "⾌", Reading: "とらがしら", Meaning: "tiger" },
    { Radical: "⾍", Reading: "むし", Meaning: "worm, insect, bug" },
    { Radical: "", Reading: "むしへん", Meaning: "worm, insect, bug" },
    { Radical: "⾎", Reading: "ち", Meaning: "blood" },
    { Radical: "⾏", Reading: "ぎょうがまえ", Meaning: "to go" },
    { Radical: "⾐", Reading: "ころも", Meaning: "clothing" },
    { Radical: "⾑", Reading: "にし", Meaning: "cover, west" },
    { Radical: "⻃", Reading: "にし", Meaning: "cover, west" },
    { Radical: "⽠", Reading: "うり", Meaning: "melon" }
  ];
  
  let randomRadical;
  let randomRadicals = [];
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 25;
  
  function getRandomRadical() {
    let unique = false;
    while (!unique) {
      randomRadical = radicalsData[Math.floor(Math.random() * radicalsData.length)];
      if (!randomRadicals.includes(randomRadical)) {
        unique = true;
      }
    }
    randomRadicals.push(randomRadical);
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
  
      let correctMeaning = randomRadical.Meaning + ' (' + randomRadical.Reading + ')';
      let meanings = [];
  
      while (meanings.length < 2) {
        let randomRadicalMeaning = getRandomMeaning();
        let randomMeaning = randomRadicalMeaning.Meaning + ' (' + randomRadicalMeaning.Reading + ')';
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
    let meanings = radicalsData.filter(radical => radical.Meaning !== randomRadical.Meaning);
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
    let correctAnswer = randomRadical.Meaning + ' (' + randomRadical.Reading + ')';
    let result = userInput === correctAnswer;
    let resultDiv = document.getElementById('result');
    if (result) {
      resultDiv.innerText = 'Correct!';
      resultDiv.style.color = 'green';
      resultDiv.style.fontWeight = '700';
      correctCount++;
      document.getElementById('correct_answer_display').style.display = 'none';
    } else {
      resultDiv.innerText = 'Incorrect!';
      resultDiv.style.color = 'red';
      resultDiv.style.fontWeight = '700';
      let correctAnswerText = document.createElement('p');
      correctAnswerText.innerText = 'Correct answer to last question: ' + randomRadical.Radical + " -> " +correctAnswer;
      correctAnswerText.style.color = 'green'; 
      correctAnswerText.style.fontWeight = '700';
      let correctAnswerDisplay = document.getElementById('correct_answer_display');
      correctAnswerDisplay.innerHTML = ''; 
      correctAnswerDisplay.appendChild(correctAnswerText);
      correctAnswerDisplay.style.display = 'block'; 
    }
    displayQuestion();
  }
  
  function showScore() {
    const lvl = 'Radicals with 4-6 strokes';
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
  
  