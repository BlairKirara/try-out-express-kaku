let dakuten = [
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
    { Katakana: "ポ", Romaji: 'po'}
    ];

    let randomCharacter;
    let questionCount = 0;
    let correctCount = 0;
    
    function getRandomCharacter() {
        randomCharacter = [];
        while (randomCharacter.length < 3) {
            let index = Math.floor(Math.random() * dakuten.length);
            let kata = dakuten[index];
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
        document.getElementById("question").innerText = "Quiz finished! Your score: " + correctCount + " out of 15";
        document.getElementById("question").style.fontSize = "30px"
        document.getElementById("go_back_to").innerText = "Go back to:";
        document.getElementById("go_back_front").innerHTML = "<a href='/'>Front Page</a>";
        document.getElementById("go_back_katakana").innerHTML = "<a href='/katakana/list'>Katakana List</a>";
        document.getElementById("submit_answer").style.display = "none";
        document.getElementById("answer").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("questionNumber").innerText = ""; 
    }
    
    displayQuestion();
