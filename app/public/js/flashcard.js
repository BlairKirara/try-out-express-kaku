const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const initializeFlashcards = (set) => {
  const shuffledFlashcards = shuffleArray(set);
  let currentFlashcardIndex = 0;

  function revealRomaji() {
    document.getElementById('romaji-reading').innerText = shuffledFlashcards[currentFlashcardIndex].romaji;
    document.getElementById('romaji-reading').style.display = 'block';
  }

  function nextFlashcard() {
    currentFlashcardIndex++;
    if (currentFlashcardIndex < shuffledFlashcards.length) {
      document.getElementById('hiragana-reading').innerText = shuffledFlashcards[currentFlashcardIndex].hiragana;
      document.getElementById('romaji-reading').style.display = 'none';
      document.getElementById('romaji-reading').innerText = '';
    } else {
      const messageElement = document.createElement('p');
      messageElement.innerText = 'All flashcards revised!';
      const goBackButton = document.createElement('button');
      goBackButton.innerText = 'Go back to the flashcard sets list';
      goBackButton.type = 'button';
      goBackButton.className = 'go_next';
      goBackButton.addEventListener('click', () => {
        window.location.href = "/hiragana_sets";
      });

      const flashcardContainer = document.getElementById('flashcard-container');
      flashcardContainer.innerHTML = '';
      flashcardContainer.appendChild(messageElement);
      flashcardContainer.appendChild(goBackButton);
      return;
    }
  }

  document.getElementById('hiragana-reading').innerText = shuffledFlashcards[0].hiragana;

  return {
    revealRomaji,
    nextFlashcard
  };
};
