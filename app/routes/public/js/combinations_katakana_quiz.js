let combinations = [
    { Katakana: "キャ", Romaji: 'kya'},
    { Katakana: "キュ", Romaji: 'kyu'},
    { Katakana: "キョ", Romaji: 'kyo'},
    { Katakana: "ギャ", Romaji: 'gya'},
    { Katakana: "ギュ", Romaji: 'gyu'},
    { Katakana: "ギョ", Romaji: 'gyo'},
    { Katakana: "シャ", Romaji: 'sha'},
    { Katakana: "シュ", Romaji: 'shu'},
    { Katakana: "ショ", Romaji: 'sho'},
    { Katakana: "ジャ", Romaji: 'ja'},
    { Katakana: "ジュ", Romaji: 'ju'},
    { Katakana: "ジョ", Romaji: 'jo'},
    { Katakana: "チャ", Romaji: 'cha'},
    { Katakana: "チュ", Romaji: 'chu'},
    { Katakana: "チョ", Romaji: 'cho'},
    { Katakana: "ニャ", Romaji: 'nya'},
    { Katakana: "ニュ", Romaji: 'nyu'},
    { Katakana: "ニョ", Romaji: 'nyo'},
    { Katakana: "ヒャ", Romaji: 'hya'},
    { Katakana: "ヒュ", Romaji: 'hyu'},
    { Katakana: "ヒョ", Romaji: 'hyo'},
    { Katakana: "ビャ", Romaji: 'bya'},
    { Katakana: "ビュ", Romaji: 'byu'},
    { Katakana: "ビョ", Romaji: 'byo'},
    { Katakana: "ピャ", Romaji: 'pya'},
    { Katakana: "ピュ", Romaji: 'pyu'},
    { Katakana: "ピョ", Romaji: 'pyo'},
    { Katakana: "ミャ", Romaji: 'mya'},
    { Katakana: "ミュ", Romaji: 'myu'},
    { Katakana: "ミョ", Romaji: 'myo'},
    { Katakana: "リャ", Romaji: 'rya'},
    { Katakana: "リュ", Romaji: 'ryu'},
    { Katakana: "リョ", Romaji: 'ryo'}
    ];

    let randomCharacter;
    let questionCount = 0;
    let correctCount = 0;
    let number_of_questions = 15;
    
    function getRandomCharacter() {
        randomCharacter = [];
        while (randomCharacter.length < 3) {
            let index = Math.floor(Math.random() * combinations.length);
            let kata = combinations[index];
            if (!randomCharacter.includes(kata)) {
                randomCharacter.push(kata);
            }
        }
    }
    
    function displayQuestion() {
        questionCount++;
        if (questionCount <= 15) {
            getRandomCharacter();
            let question = "";
            randomCharacter.forEach(kata => {
                question += kata.Katakana;
            });
            document.getElementById("question").innerText = question;
            document.getElementById("answer").value = "";
            document.getElementById("questionNumber").innerText = "Question " + questionCount + " of 15";
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
          answer += kata.Katakana;
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
        const lvl = "Katakana Combinations";
        document.getElementById("question").innerText = "Quiz finished! Your score: " + correctCount + " out of 15";
        document.getElementById("question").style.fontSize = "30px"
        document.getElementById("go_back_to").innerText = "Go back to:";
        document.getElementById("go_back_front").innerHTML = "<a href='/'>Front Page</a>";
        document.getElementById("go_back_katakana").innerHTML = "<a href='/katakana/list'>Katakana List</a>";
        document.getElementById("submit_answer").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("questionNumber").innerText = ""; 

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