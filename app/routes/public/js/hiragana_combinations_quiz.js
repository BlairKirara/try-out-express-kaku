let hiragana = [
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
  let number_of_questions = 15;
  
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
    let answer = '';
    randomCharacter.forEach((kata) => {
      answer += kata.Hiragana;
    });
    let result = userInput === correctReading;
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
      correctAnswerText.innerText = 'Correct answer to last question: ' + answer + ' -> ' + correctReading;
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
      const lvl = 'Hiragana Combinations';
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