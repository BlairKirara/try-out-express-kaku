let hiragana = [
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
    { Hiragana: "ん", Romaji: 'n' },
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
    { Hiragana: "ぽ", Romaji: 'po'},    
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
  
  let randomCharacter;
  let questionCount = 0;
  let correctCount = 0;
  let number_of_questions = 25;
  
  function getRandomCharacter() {
    randomCharacter = [];
    while (randomCharacter.length < 3) {
      let index = Math.floor(Math.random() * hiragana.length);
      let kata = hiragana[index];
      if (!randomCharacter.includes(kata)) {
        randomCharacter.push(kata);
      }
    }
  }
  
  function displayQuestion() {
    questionCount++;
    if (questionCount <= number_of_questions) {
      getRandomCharacter();
      let question = '';
      randomCharacter.forEach((kata) => {
        question += kata.Hiragana;
      });
      document.getElementById('question').innerText = question;
      document.getElementById('answer').value = '';
      document.getElementById('questionNumber').innerText =
        'Question ' + questionCount + ' of ' + number_of_questions;
    } else {
      showScore();
    }
  }
  
  function checkAnswer() {
    let userInput = document.getElementById('answer').value.trim();
    if (userInput === '') {
      document.getElementById('result').innerText = 'Please provide an answer';
      document.getElementById('result').style.color = 'red';
      document.getElementById('result').style.fontWeight = '700';
      return;
    }
    let correctReading = '';
    randomCharacter.forEach((kata) => {
      correctReading += kata.Romaji;
    });
    let result = userInput === correctReading;
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
      // Display the score
      const lvl = 'Hiragana Final Test';
      document.getElementById('question').innerText =
        'Quiz finished! Your score: ' + correctCount + ' out of ' + number_of_questions;
      document.getElementById('question').style.fontSize = '30px';
      document.getElementById('go_back_to').innerText = 'Go back to:';
      document.getElementById('go_back_front').innerHTML =
        "<a href='/'>Front Page</a>";
      document.getElementById('go_back_katakana').innerHTML =
        "<a href='/hiragana/list'>Hiragana List</a>";
      document.getElementById('submit_answer').style.display = 'none';
      document.getElementById('answer').style.display = 'none';
      document.getElementById('result').style.display = 'none';
      document.getElementById('questionNumber').innerText = '';

      const percentage = ((correctCount / number_of_questions) * 100).toFixed(2);
    
      // Send the score to the server
      const scoreData = {
        score: percentage,
        lvl: lvl,
      };
    
      // Send an AJAX request to the server
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