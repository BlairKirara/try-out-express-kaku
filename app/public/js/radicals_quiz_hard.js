const radicalsData = [
    { Radical: "⾒", Reading: "みる", Meaning: "to see" },
    { Radical: "⾓", Reading: "つの", Meaning: "horn, corner" },
    { Radical: "", Reading: "つのへん", Meaning: "horn, corner" },
    { Radical: "⾔", Reading: "げん", Meaning: "words, to speak, say" },
    { Radical: "", Reading: "ごんへん", Meaning: "words, to speak, say" },
    { Radical: "⾕", Reading: "たに", Meaning: "valley" },
    { Radical: "", Reading: "たにへん", Meaning: "valley" },
    { Radical: "⾖", Reading: "まめ", Meaning: "bean" },
    { Radical: "", Reading: "まめへん", Meaning: "bean" },
    { Radical: "⾗", Reading: "いのこ", Meaning: "pig" },
    { Radical: "⾘", Reading: "むじなへん", Meaning: "badger" },
    { Radical: "⾙", Reading: "かい", Meaning: "shell, property, wealth" },
    { Radical: "", Reading: "かいへん", Meaning: "shell, property, wealth" },
    { Radical: "⾚", Reading: "あか", Meaning: "red" },
    { Radical: "⾛", Reading: "はしる", Meaning: "to run" },
    { Radical: "", Reading: "そうにょう", Meaning: "to run" },
    { Radical: "⾜", Reading: "あし", Meaning: "foot, leg" },
    { Radical: "⻊", Reading: "あしへん", Meaning: "foot, leg" },
    { Radical: "⾝", Reading: "み", Meaning: "body" },
    { Radical: "", Reading: "みへん", Meaning: "body" },
    { Radical: "⾞", Reading: "くるま", Meaning: "vehicle, wheel, car" },
    { Radical: "", Reading: "くるまへん", Meaning: "vehicle, wheel, car" },
    { Radical: "⾟", Reading: "からい", Meaning: "bitter" },
    { Radical: "⾠", Reading: "しんのたつ", Meaning: "Fifth zodiac sign, 7–9 A.M." },
    { Radical: "⾡", Reading: "しんにょう", Meaning: "to advance, move ahead" },
    { Radical: "⾢", Reading: "むら", Meaning: "community" },
    { Radical: "⾣", Reading: "ひよみのとり", Meaning: "sake jar, bird" },
    { Radical: "", Reading: "とりへん", Meaning: "sake jar, bird" },
    { Radical: "⾤", Reading: "のごめ", Meaning: "to separate" },
    { Radical: "", Reading: "のごめへん", Meaning: "to separate" },
    { Radical: "⾥", Reading: "さと", Meaning: "village, (3.93 km)" },
    { Radical: "", Reading: "さとへん", Meaning: "village, (3.93 km)" },
    { Radical: "⾂", Reading: "しん", Meaning: "retainer, minister" },
    { Radical: "", Reading: "まいあし", Meaning: "contrary, to err" },
    { Radical: "⻨", Reading: "むぎ", Meaning: "wheat" },
    { Radical: "⾦", Reading: "かね", Meaning: "metal, gold, mineral" },
    { Radical: "", Reading: "かねへん", Meaning: "metal, gold, mineral" },
    { Radical: "⻑", Reading: "ながい", Meaning: "long" },
    { Radical: "⾨", Reading: "もんがまえ", Meaning: "gate, door" },
    { Radical: "⾩", Reading: "こざと", Meaning: "hill" },
    { Radical: "⾪", Reading: "れいづくり", Meaning: "to capture" },
    { Radical: "⾫", Reading: "ふるとり", Meaning: "small bird" },
    { Radical: "⾬", Reading: "あめ", Meaning: "rain" },
    { Radical: "⻗", Reading: "あめかんむり", Meaning: "rain" },
    { Radical: "⾭", Reading: "あお", Meaning: "blue, green" },
    { Radical: "⻘", Reading: "あお", Meaning: "blue, green"},
    { Radical: "⾮", Reading: "あらず", Meaning: "wrong, non-" },
    { Radical: "⻟", Reading: "しょくへん", Meaning: "food, to eat"},
    { Radical: "⻫", Reading: "せい", Meaning: "alike"},
    { Radical: "⾯", Reading: "めん", Meaning: "face, surface" },
    { Radical: "⾰", Reading: "つくりがわ", Meaning: "leather" },
    { Radical: "", Reading: "なめしがわ", Meaning: "leather" },
    { Radical: "⾲", Reading: "にら", Meaning: "leek" },
    { Radical: "⾳", Reading: "おと", Meaning: "sound, noise" },
    { Radical: "⾴", Reading: "おおがい", Meaning: "head, page"},
    { Radical: "⾵", Reading: "かぜ", Meaning: "wind" },
    { Radical: "⾶", Reading: "とぶ", Meaning: "to fly" },
    { Radical: "⾷", Reading: "しょく", Meaning: "food, to eat" },
    { Radical: "⾸", Reading: "くび", Meaning: "head" },
    { Radical: "⾹", Reading: "かおり", Meaning: "scent" },
    { Radical: "⾺", Reading: "うま", Meaning: "horse" },
    { Radical: "", Reading: "うまへん", Meaning: "horse"},
    { Radical: "⾻", Reading: "ほね", Meaning: "bone" },
    { Radical: "", Reading: "ほねへん", Meaning: "bone"},
    { Radical: "⾼", Reading: "たかい", Meaning: "high" },
    { Radical: "⾽", Reading: "かみかんむり", Meaning: "long hair" },
    { Radical: "⾾", Reading: "たたかいがまえ", Meaning: "fighting" },
    { Radical: "⾿", Reading: "においざけ", Meaning: "herbs" },
    { Radical: "⿀", Reading: "れき", Meaning: "tripod" },
    { Radical: "⿁", Reading: "おに", Meaning: "demon" },
    { Radical: "⾱", Reading: "なめしがわ", Meaning: "leather"},
    { Radical: "⿂", Reading: "うお", Meaning: "fish" },
    { Radical: "", Reading: "うおへん", Meaning: "fish"},
    { Radical: "⿃", Reading: "とり", Meaning: "bird" },
    { Radical: "⿄", Reading: "しお", Meaning: "salt" },
    { Radical: "⿅", Reading: "しか", Meaning: "deer" },
    { Radical: "⿆", Reading: "むぎ", Meaning: "wheat" },
    { Radical: "⿇", Reading: "あさ", Meaning: "hemp" },
    { Radical: "", Reading: "あさかんむり", Meaning: "hemp"},
    { Radical: "⻩", Reading: "き", Meaning: "yellow"},
    { Radical: "黒", Reading: "くろ", Meaning: "black"},
    { Radical: "⻲", Reading: "かめ", Meaning: "turtle"},
    { Radical: "⿈", Reading: "き", Meaning: "yellow" },
    { Radical: "⿉", Reading: "きび", Meaning: "millet" },
    { Radical: "⿊", Reading: "くろ", Meaning: "black" },
    { Radical: "⿋", Reading: "ぬいとり", Meaning: "embroider" },
    { Radical: "⻭", Reading: "は", Meaning: "tooth"},
    { Radical: "⿌", Reading: "かえる", Meaning: "frog" },
    { Radical: "⿍", Reading: "かなえ", Meaning: "tripod" },
    { Radical: "⿎", Reading: "つづみ", Meaning: "drum" },
    { Radical: "⿏", Reading: "ねずみ", Meaning: "rat, mouse" },
    { Radical: "⿐", Reading: "はな", Meaning: "nose" },
    { Radical: "⿑", Reading: "せい", Meaning: "alike" },
    { Radical: "⿒", Reading: "は", Meaning: "tooth" },
    { Radical: "⿓", Reading: "りゅう", Meaning: "dragon" },
    { Radical: "⿔", Reading: "かめ", Meaning: "turtle" },
    { Radical: "⿕", Reading: "やく", Meaning: "flute" } 
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
  
  