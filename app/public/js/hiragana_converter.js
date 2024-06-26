const romajiToHiragana = {
    a: 'あ',
    i: 'い',
    u: 'う',
    e: 'え',
    o: 'お',
    ka: 'か',
    ki: 'き',
    ku: 'く',
    ke: 'け',
    ko: 'こ',
    sa: 'さ',
    shi: 'し',
    su: 'す',
    se: 'せ',
    so: 'そ',
    ta: 'た',
    chi: 'ち',
    tsu: 'つ',
    te: 'て',
    to: 'と',
    na: 'な',
    ni: 'に',
    nu: 'ぬ',
    ne: 'ね',
    no: 'の',
    ha: 'は',
    hi: 'ひ',
    fu: 'ふ',
    he: 'へ',
    ho: 'ほ',
    ma: 'ま',
    mi: 'み',
    mu: 'む',
    me: 'め',
    mo: 'も',
    ya: 'や',
    yu: 'ゆ',
    yo: 'よ',
    ra: 'ら',
    ri: 'り',
    ru: 'る',
    re: 'れ',
    ro: 'ろ',
    wa: 'わ',
    wo: 'を',
    n: 'ん',
    ga: 'が',
    gi: 'ぎ',
    gu: 'ぐ',
    ge: 'げ',
    go: 'ご',
    za: 'ざ',
    ji: 'じ',
    zu: 'ず',
    ze: 'ぜ',
    zo: 'ぞ',
    da: 'だ',
    de: 'で',
    do: 'ど',
    ba: 'ば',
    bi: 'び',
    bu: 'ぶ',
    be: 'べ',
    bo: 'ぼ',
    pa: 'ぱ',
    pi: 'ぴ',
    pu: 'ぷ',
    pe: 'ぺ',
    po: 'ぽ',
    kya: 'きゃ',
    kyu: 'きゅ',
    kyo: 'きょ',
    sha: 'しゃ',
    shu: 'しゅ',
    sho: 'しょ',
    cha: 'ちゃ',
    chu: 'ちゅ',
    cho: 'ちょ',
    nya: 'にゃ',
    nyu: 'にゅ',
    nyo: 'にょ',
    hya: 'ひゃ',
    hyu: 'ひゅ',
    hyo: 'ひょ',
    mya: 'みゃ',
    myu: 'みゅ',
    myo: 'みょ',
    rya: 'りゃ',
    ryu: 'りゅ',
    ryo: 'りょ',
    gya: 'ぎゃ',
    gyu: 'ぎゅ',
    gyo: 'ぎょ',
    ja: 'じゃ',
    ju: 'じゅ',
    jo: 'じょ',
    bya: 'びゃ',
    byu: 'びゅ',
    byo: 'びょ',
    pya: 'ぴゃ',
    pyu: 'ぴゅ',
    pyo: 'ぴょ',
  };
  
  let flashcards = [];
  
  function convertRomajiToHiragana() {
    const inputText = document.getElementById('input').value;
    let words = inputText.split(/[^a-zA-Z]+/).filter(Boolean);
  
    for (let word of words) {
      let romaji = word.toLowerCase();
      let hiragana = '';
  
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
          hiragana += 'っ';
          i++;
        } else if (/[a-zA-Z]/.test(char)) {
          hiragana += char;
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
            flashcards.push({ romaji: romaji, hiragana: hiragana });
        }
    }
  
    let outputText = '';
    for (let flashcard of flashcards) {
      outputText += `${flashcard.romaji}: ${flashcard.hiragana}\n`;
    }
  
    document.getElementById('output').innerText = outputText;
    document.getElementById('output-section').style.display = 'block';

    document.getElementById('converter-box').style.display = 'none';
  }
  
  function saveYourSet() {
    const setName = document.getElementById('set').value;
  
    if (!setName.trim()) {

      const messageDiv = document.createElement('div');
      
      const errorMessage = document.createElement('p');
      errorMessage.className = 'output-error';
      errorMessage.textContent = 'Please provide a name for your set';
      
      messageDiv.appendChild(errorMessage);
  
      const outputSection = document.getElementById('output-section');
      
      outputSection.insertBefore(messageDiv, outputSection.firstChild);
  
      return; 
    }
  
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/hiragana/set', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        const outputSection = document.getElementById('output-section');
        outputSection.innerHTML = "<p>Set saved successfully</p>";
  
        const seeSetsButton = document.createElement('button');
        seeSetsButton.innerText = 'See hiragana sets';
        seeSetsButton.type = 'button';
        seeSetsButton.classList.add('go_next');
        seeSetsButton.addEventListener('click', () => {
          window.location.href = "/hiragana_sets";
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
  

  function deleteSet(setId, row) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/hiragana_sets/${setId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('Set deleted successfully');
        row.remove();
  
        const newP = document.createElement('p');
        newP.className = 'output-success';
        newP.textContent = 'Set deleted successfully!';
 
        const outputSection = document.getElementById('output-section-success');
        outputSection.appendChild(newP);
      } else {
        console.error('Error deleting set:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Network error while deleting set');
    };
    xhr.send();
  }
  
  
  function practiceSet(setId) {
    window.location.href = `/practice/${setId}`;
  }
  
  function editSet(setId) {
    window.location.href = `/edit/${setId}`;
  }

  function deleteFlashcard(flashcardId, row) {
    const xhr = new XMLHttpRequest();
    xhr.open('DELETE', `/flashcard/delete/${flashcardId}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('Flashcard deleted successfully');
        row.remove(); 
  
        const newP = document.createElement('p');
        newP.className = 'output-success';
        newP.textContent = 'Flashcard deleted successfully!';
  
        const outputSection = document.getElementById('output-section-success');
        outputSection.appendChild(newP);
      } else {
        console.error('Error deleting flashcard:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Network error while deleting flashcard');
    };
    xhr.send();
  }  

  function editFlashcard(flashcardId) {
    window.location.href = `/edit_hiragana_flashcard/${flashcardId}`;
  }
  

  function resetQuiz(userId, level, rowId) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', `/quiz_scores/reset/${userId}/${level}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log('Quiz score reset successfully');
        document.getElementById(rowId).remove();
  
        const newP = document.createElement('p');
        newP.className = 'output-success';
        newP.textContent = 'Quiz score reset successfully!';
  
        const outputSection = document.getElementById('output-section-success');
        outputSection.appendChild(newP);
  
        if (document.querySelectorAll('table tbody tr').length === 0) {
          document.querySelector('table').style.display = 'none';
        }
      } else {
        console.error('Error resetting quiz scores:', xhr.statusText);
      }
    };
    xhr.onerror = function () {
      console.error('Network error while resetting quiz scores');
    };
    xhr.send();
  }
  
    