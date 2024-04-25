let katakana = [
    { Katakana: "ア", Romaji: 'a', },
    { Katakana: "イ", Romaji: 'i', },
    { Katakana: "ウ", Romaji: 'u', },
    { Katakana: "エ", Romaji: 'e', },
    { Katakana: "オ", Romaji: 'o', },
    { Katakana: "ナ", Romaji: 'na', },
    { Katakana: "ニ", Romaji: 'ni', },
    { Katakana: "ヌ", Romaji: 'nu', },
    { Katakana: "ネ", Romaji: 'ne', },
    { Katakana: "ノ", Romaji: 'no', },
    { Katakana: "マ", Romaji: 'ma', },
    { Katakana: "ミ", Romaji: 'mi', },
    { Katakana: "ム", Romaji: 'mu', },
    { Katakana: "メ", Romaji: 'me', },
    { Katakana: "モ", Romaji: 'mo', },
    { Katakana: "ヤ", Romaji: 'ya', },
    { Katakana: "ユ", Romaji: 'yu', },
    { Katakana: "ヨ", Romaji: 'yo', },
    { Katakana: "ラ", Romaji: 'ra', },
    { Katakana: "リ", Romaji: 'ri', },
    { Katakana: "ル", Romaji: 'ru', },
    { Katakana: "レ", Romaji: 're', },
    { Katakana: "ロ", Romaji: 'ro', },
    { Katakana: "ワ", Romaji: 'wa', },
    { Katakana: "ヲ", Romaji: 'wo', },
    { Katakana: "ン", Romaji: 'n', },
    { Katakana: "ガ", Romaji: 'ga'},
    { Katakana: "ギ", Romaji: 'gi'},
    { Katakana: "グ", Romaji: 'gu'},
    { Katakana: "ゲ", Romaji: 'ge'},
    { Katakana: "ゴ", Romaji: 'go'},
    { Katakana: "ザ", Romaji: 'za'},
    { Katakana: "ジ", Romaji: 'ji'},
    { Katakana: "ズ", Romaji: 'zu'},
    { Katakana: "ゼ", Romaji: 'ze'},
    { Katakana: "ゾ", Romaji: 'zo'},
    { Katakana: "ダ", Romaji: 'da'},
    { Katakana: "ヂ", Romaji: 'ji'},
    { Katakana: "ヅ", Romaji: 'zu'}, 
    { Katakana: "デ", Romaji: 'de'},
    { Katakana: "ド", Romaji: 'do'},
    { Katakana: "バ", Romaji: 'ba'},
    { Katakana: "ビ", Romaji: 'bi'},
    { Katakana: "ブ", Romaji: 'bu'},
    { Katakana: "ベ", Romaji: 'be'},
    { Katakana: "ボ", Romaji: 'bo'},
    { Katakana: "パ", Romaji: 'pa'},
    { Katakana: "ピ", Romaji: 'pi'},
    { Katakana: "プ", Romaji: 'pu'},
    { Katakana: "ペ", Romaji: 'pe'},
    { Katakana: "ポ", Romaji: 'po'},
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
        if (questionCount <= 25) {
            getRandomCharacter();
            let question = "";
            randomCharacter.forEach(kata => {
                question += kata.Katakana;
            });
            document.getElementById("question").innerText = question;
            document.getElementById("answer").value = "";
            document.getElementById("questionNumber").innerText = "Question " + questionCount + " of 25";
        } else {
            showScore();
        }
    }
    
    function checkAnswer() {
        let userInput = document.getElementById("answer").value.trim();
        if (userInput === "") {
            document.getElementById("result").innerText = "Please provide an answer";
            document.getElementById("result").style.color = "red";
            document.getElementById("result").style.fontWeight = "700";
            return;
        }
        let correctReading = "";
        randomCharacter.forEach(kata => {
            correctReading += kata.Romaji;
        });
        let result = userInput === correctReading;
        let resultDiv = document.getElementById("result");
        if (result) {
            resultDiv.innerText = "Correct!";
            resultDiv.style.color = "green";
            resultDiv.style.fontWeight = "700";
            correctCount++;
        } else {
            resultDiv.innerText = "Incorrect!";
            resultDiv.style.color = "red";
            resultDiv.style.fontWeight = "700";
        }
        displayQuestion();
    }
    
    function showScore() {
        const lvl = 'final';
        document.getElementById("question").innerText = "Quiz finished! Your score: " + correctCount + " out of 25";
        document.getElementById("question").style.fontSize = "30px"
        document.getElementById("go_back_to").innerText = "Go back to:";
        document.getElementById("go_back_front").innerHTML = "<a href='/'>Front Page</a>";
        document.getElementById("go_back_katakana").innerHTML = "<a href='/katakana/list'>Katakana List</a>";
        document.getElementById("submit_answer").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("questionNumber").innerText = ""; 

        const scoreData = {
            score: correctCount,
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