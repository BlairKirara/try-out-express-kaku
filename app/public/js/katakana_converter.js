const romajiToKatakana = {
    a: 'ア',
    i: 'イ',
    u: 'ウ',
    e: 'エ',
    o: 'オ',
    ka: 'カ',
    ki: 'キ',
    ku: 'ク',
    ke: 'ケ',
    ko: 'コ',
    sa: 'サ',
    shi: 'シ',
    su: 'ス',
    se: 'セ',
    so: 'ソ',
    ta: 'タ',
    chi: 'チ',
    tsu: 'ツ',
    te: 'テ',
    to: 'ト',
    na: 'ナ',
    ni: 'ニ',
    nu: 'ヌ',
    ne: 'ネ',
    no: 'ノ',
    ha: 'ハ',
    hi: 'ヒ',
    fu: 'フ',
    he: 'ヘ',
    ho: 'ホ',
    ma: 'マ',
    mi: 'ミ',
    mu: 'ム',
    me: 'メ',
    mo: 'モ',
    ya: 'ヤ',
    yu: 'ユ',
    yo: 'ヨ',
    ra: 'ラ',
    ri: 'リ',
    ru: 'ル',
    re: 'レ',
    ro: 'ロ',
    wa: 'ワ',
    wo: 'ヲ',
    n: 'ン',
    ga: 'ガ',
    gi: 'ギ',
    gu: 'グ',
    ge: 'ゲ',
    go: 'ゴ',
    za: 'ザ',
    ji: 'ジ',
    zu: 'ズ',
    ze: 'ゼ',
    zo: 'ゾ',
    da: 'ダ',
    de: 'デ',
    do: 'ド',
    ba: 'バ',
    bi: 'ビ',
    bu: 'ブ',
    be: 'ベ',
    bo: 'ボ',
    pa: 'パ',
    pi: 'ピ',
    pu: 'プ',
    pe: 'ペ',
    po: 'ポ',
    kya: 'キャ',
    kyu: 'キュ',
    kyo: 'キョ',
    sha: 'シャ',
    shu: 'シュ',
    sho: 'ショ',
    cha: 'チャ',
    chu: 'チュ',
    cho: 'チョ',
    nya: 'ニャ',
    nyu: 'ニュ',
    nyo: 'ニョ',
    hya: 'ヒャ',
    hyu: 'ヒュ',
    hyo: 'ヒョ',
    mya: 'ミャ',
    myu: 'ミュ',
    myo: 'ミョ',
    rya: 'リャ',
    ryu: 'リュ',
    ryo: 'リョ',
    gya: 'ギャ',
    gyu: 'ギュ',
    gyo: 'ギョ',
    ja: 'ジャ',
    ju: 'ジュ',
    jo: 'ジョ',
    bya: 'ビャ',
    byu: 'ビュ',
    byo: 'ビョ',
    pya: 'ピャ',
    pyu: 'ピュ',
    pyo: 'ピョ',
};
  
  let flashcards = [];
  
  function convertRomajiToKatakana() {
    const inputText = document.getElementById('input').value;
    let words = inputText.split(/[^a-zA-Z]+/).filter(Boolean);

    for (let word of words) {
        let romaji = word.toLowerCase();
        let katakana = '';

        let i = 0;
        while (i < word.length) {
            let char = romaji[i];
            let nextTwoChars = romaji.substring(i, i + 2);
            let nextThreeChars = romaji.substring(i, i + 3);

            if (romajiToKatakana[nextThreeChars]) {
                katakana += romajiToKatakana[nextThreeChars];
                i += 3;
            } else if (romajiToKatakana[nextTwoChars]) {
                katakana += romajiToKatakana[nextTwoChars];
                i += 2;
            } else if (romajiToKatakana[char]) {
                katakana += romajiToKatakana[char];
                i++;
            } else if (romaji[i] === romaji[i + 1]) {
                katakana += 'っ';
                i++;
            } else if (/[a-zA-Z]/.test(char)) {
                katakana += char;
                i++;
            } else {
                i++;
                continue;
            }
        }

        let exists = false;
        for (let flashcard of flashcards) {
            if (flashcard.romaji === romaji) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            flashcards.push({ romaji: romaji, katakana: katakana });
        }
    }

    let outputText = '';
    for (let flashcard of flashcards) {
        outputText += `${flashcard.romaji}: ${flashcard.katakana}\n`;
    }

    document.getElementById('output').innerText = outputText;
    document.getElementById('output-section').style.display = 'block';

    document.getElementById('converter-box').style.display = 'none';
}

  
function saveYourSet() {
  const setName = document.getElementById('set').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/katakana/set', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      const outputSection = document.getElementById('output-section');
      outputSection.innerHTML = "<p>Set saved successfully</p>";
      
      const seeSetsButton = document.createElement('button');
      seeSetsButton.innerText = 'See katakana sets';
      seeSetsButton.type = 'button';
      seeSetsButton.classList.add('go_next');
      seeSetsButton.addEventListener('click', () => {
        window.location.href = "/katakana_sets";
      });
      
      outputSection.appendChild(seeSetsButton);
    } else {
      console.error('Error posting name:', xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('Network error while posting name');
  };
  xhr.send(JSON.stringify({ name: setName, flashcards: flashcards }));
}

function deleteKatakanaSet(setId, row) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `/katakana_sets/${setId}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log('Set deleted successfully');
      row.remove();
      const outputSection = document.getElementById('output-section-success');
      outputSection.innerHTML = "<p>Set deleted successfully!</p>";
    } else {
      console.error('Error deleting set:', xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error('Network error while deleting set');
  };
  xhr.send();
}


  function editKatakanaSet(setId) {
    window.location.href = `/edit_katakana_set/${setId}`;
  }

  function deleteKatakanaFlashcard(flashcardId, row) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/katakana_flashcard/delete/${flashcardId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('Flashcard deleted successfully');
        row.remove(); // Remove the row from the table
        const outputSection = document.getElementById('output-section-success');
        outputSection.innerHTML = "<p>Flashcard deleted successfully!</p>";
      } else {
        console.error('Error deleting flashcard:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Network error while deleting flashcard');
    };
    xhr.send();
  }
  
  

  function editKatakanaFlashcard(flashcardId) {
    window.location.href = `/edit_katakana_flashcard/${flashcardId}`;
  }

  function practiceKatakanaSet(setId) {
    window.location.href = `/katakana_practice/${setId}`;
  }
  