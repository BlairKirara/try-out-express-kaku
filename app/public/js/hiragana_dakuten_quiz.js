let hiragana = [
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
    { Hiragana: "ぽ", Romaji: 'po'}
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
      const lvl = 'Hiragana Dakuten';
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