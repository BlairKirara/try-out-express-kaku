const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const initializeFlashcards = (set) => {
    // Shuffle the flashcards array
    const shuffledFlashcards = shuffleArray(set);
    let currentFlashcardIndex = 0;
  
    function revealRomaji() {
      document.getElementById('romaji-reading').innerText = shuffledFlashcards[currentFlashcardIndex].romaji;
      document.getElementById('romaji-reading').style.display = 'block';
    }
  
    function nextFlashcard() {
      currentFlashcardIndex++;
      if (currentFlashcardIndex < shuffledFlashcards.length) {
        document.getElementById('katakana-reading').innerText = shuffledFlashcards[currentFlashcardIndex].katakana;
        document.getElementById('romaji-reading').style.display = 'none';
        document.getElementById('romaji-reading').innerText = ''; // Clear romaji text
      } else {
        // Display message when all flashcards are reviewed
        document.getElementById('flashcard-container').innerHTML = '<p>All flashcards revised!</p>';
        return; // Stop further execution
      }
    }
  
    // Initialize with the first flashcard
    document.getElementById('katakana-reading').innerText = shuffledFlashcards[0].katakana;
  
    return {
      revealRomaji,
      nextFlashcard
    };
  };
  