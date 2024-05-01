function displayFlashcards(flashcards) {
    const flashcardsContainer = document.getElementById('flashcards-container');
    flashcardsContainer.innerHTML = ''; // Clear previous content
  
    flashcards.forEach(flashcard => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('flashcard');
      cardElement.innerHTML = `
        <p>${flashcard.romaji}</p>
        <p>${flashcard.katakana}</p>
      `;
      flashcardsContainer.appendChild(cardElement);
    });
  }