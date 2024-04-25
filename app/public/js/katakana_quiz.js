let katakana = [
    { Katakana: 'ア', Romaji: 'a' },
    { Katakana: 'イ', Romaji: 'i' },
    { Katakana: 'ウ', Romaji: 'u' },
    { Katakana: 'エ', Romaji: 'e' },
    { Katakana: 'オ', Romaji: 'o' },
    { Katakana: 'カ', Romaji: 'ka' },
    { Katakana: 'キ', Romaji: 'ki' },
    { Katakana: 'ク', Romaji: 'ku' },
    { Katakana: 'ケ', Romaji: 'ke' },
    { Katakana: 'コ', Romaji: 'ko' },
    { Katakana: 'サ', Romaji: 'sa' },
    { Katakana: 'シ', Romaji: 'shi' },
    { Katakana: 'ス', Romaji: 'su' },
    { Katakana: 'セ', Romaji: 'se' },
    { Katakana: 'ソ', Romaji: 'so' },
    { Katakana: 'タ', Romaji: 'ta' },
    { Katakana: 'チ', Romaji: 'chi' },
    { Katakana: 'ツ', Romaji: 'tsu' },
    { Katakana: 'テ', Romaji: 'te' },
    { Katakana: 'ト', Romaji: 'to' },
    { Katakana: 'ナ', Romaji: 'na' },
    { Katakana: 'ニ', Romaji: 'ni' },
    { Katakana: 'ヌ', Romaji: 'nu' },
    { Katakana: 'ネ', Romaji: 'ne' },
    { Katakana: 'ノ', Romaji: 'no' },
    { Katakana: 'ハ', Romaji: 'ha' },
    { Katakana: 'ヒ', Romaji: 'hi' },
    { Katakana: 'フ', Romaji: 'fu' },
    { Katakana: 'ヘ', Romaji: 'he' },
    { Katakana: 'ホ', Romaji: 'ho' },
    { Katakana: 'マ', Romaji: 'ma' },
    { Katakana: 'ミ', Romaji: 'mi' },
    { Katakana: 'ム', Romaji: 'mu' },
    { Katakana: 'メ', Romaji: 'me' },
    { Katakana: 'モ', Romaji: 'mo' },
    { Katakana: 'ヤ', Romaji: 'ya' },
    { Katakana: 'ユ', Romaji: 'yu' },
    { Katakana: 'ヨ', Romaji: 'yo' },
    { Katakana: 'ラ', Romaji: 'ra' },
    { Katakana: 'リ', Romaji: 'ri' },
    { Katakana: 'ル', Romaji: 'ru' },
    { Katakana: 'レ', Romaji: 're' },
    { Katakana: 'ロ', Romaji: 'ro' },
    { Katakana: 'ワ', Romaji: 'wa' },
    { Katakana: 'ヲ', Romaji: 'wo' },
    { Katakana: 'ン', Romaji: 'n' },
  ];
  
  let randomCharacter;
  let questionCount = 0;
  let correctCount = 0;
  
  function getRandomCharacter() {
    randomCharacter = [];
    while (randomCharacter.length < 3) {
      let index = Math.floor(Math.random() * katakana.length);
      let kata = katakana[index];
      if (!randomCharacter.includes(kata)) {
        randomCharacter.push(kata);
      }
    }
  }
  
  function displayQuestion() {
    questionCount++;
    if (questionCount <= 20) {
      getRandomCharacter();
      let question = '';
      randomCharacter.forEach((kata) => {
        question += kata.Katakana;
      });
      document.getElementById('question').innerText = question;
      document.getElementById('answer').value = '';
      document.getElementById('questionNumber').innerText =
        'Question ' + questionCount + ' of 20';
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
      document.getElementById('question').innerText =
        'Quiz finished! Your score: ' + correctCount + ' out of 20';
      document.getElementById('question').style.fontSize = '30px';
      document.getElementById('go_back_to').innerText = 'Go back to:';
      document.getElementById('go_back_front').innerHTML =
        "<a href='/'>Front Page</a>";
      document.getElementById('go_back_katakana').innerHTML =
        "<a href='/katakana/list'>Katakana List</a>";
      document.getElementById('submit_answer').style.display = 'none';
      document.getElementById('answer').style.display = 'none';
      document.getElementById('result').style.display = 'none';
      document.getElementById('questionNumber').innerText = '';
    
      // Send the score to the server
      const scoreData = {
        score: correctCount,
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