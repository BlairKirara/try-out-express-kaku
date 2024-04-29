const romajiToHiragana = {
    'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
    'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
    'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
    'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
    'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
    'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
    'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
    'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
    'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
    'wa': 'わ', 'wo': 'を', 'n': 'ん',
    'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
    'za': 'ざ', 'ji': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
    'da': 'だ', 'de': 'で', 'do': 'ど',
    'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
    'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ',
    'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
    'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
    'cha': 'ちゃ', 'chu': 'ちゅ', 'cho': 'ちょ',
    'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
    'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
    'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
    'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
    'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
    'ja': 'じゃ', 'ju': 'じゅ', 'jo': 'じょ',
    'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
    'pya': 'ぴゃ', 'pyu': 'ぴゅ', 'pyo': 'ぴょ'
};

let flashcards = [];

function convertRomajiToHiragana() {
    const inputText = document.getElementById("input").value;
    let words = inputText.split(/[^a-zA-Z]+/).filter(Boolean);

    for (let word of words) {
        let romaji = word.toLowerCase();
        let hiragana = "";

        let i = 0;
        while (i < word.length) {
            let char = romaji[i]; 
            let nextTwoChars = romaji.substring(i, i + 2);
            let nextThreeChars = romaji.substring(i, i + 3);

            if (romajiToHiragana[nextThreeChars]) {
                hiragana += romajiToHiragana[nextThreeChars];
                i += 3;
            } else if (romajiToHiragana[nextTwoChars]) {
                hiragana += romajiToHiragana[nextTwoChars];
                i += 2;
            } else if (romajiToHiragana[char]) {
                hiragana += romajiToHiragana[char];
                i++;
            } else if (romaji[i] === romaji[i + 1]) {
                hiragana += "っ";
                i++;
            } else {
                i++;
                continue;
            }
        }

        flashcards.push({ romaji: romaji, hiragana: hiragana });

    }

    let outputText = "";
    for (let flashcard of flashcards) {
        outputText += `${flashcard.romaji}: ${flashcard.hiragana}\n`;
    }

    document.getElementById("output").innerText = outputText;
    document.getElementById("output-section").style.display = "block";
}

function saveYourSet(){
    const setName = document.getElementById("set").value;

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/set', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
        console.log('Name posted successfully');
        } else {
        console.error('Error posting name:', xhr.statusText);
        }
    };
    xhr.onerror = function () {
        console.error('Network error while posting name');
    };
    xhr.send(JSON.stringify(setName));

    for (let flashcard of flashcards) {
        const setData = {
            name: setName,
            hiragana: flashcard.hiragana,
            romaji: flashcard.romaji,
          };

          const xhr = new XMLHttpRequest();
          xhr.open('POST', '/set_data', true);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.onload = function () {
              if (xhr.status === 200) {
              console.log('Set data posted successfully');
              } else {
              console.error('Error posting set data:', xhr.statusText);
              }
          };
          xhr.onerror = function () {
              console.error('Network error while posting set data');
          };
          xhr.send(JSON.stringify(setData));
    }
}




