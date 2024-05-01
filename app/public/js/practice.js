function displayFlashcards(flashcards) {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = ''; 
  
    flashcards.forEach(flashcard => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('flashcard');
      cardElement.innerHTML = `
        <p>${flashcard.romaji}</p>
        <p>${flashcard.hiragana}</p>
      `;
      flashcardsContainer.appendChild(cardElement);
    });
  }