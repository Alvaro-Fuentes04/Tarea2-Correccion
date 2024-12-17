class ExplodingCardsGame {
  constructor() {
    this.deck = [];

    // DOM elements
    this.drawCardBtn = document.getElementById('draw-card-btn');
    this.restartBtn = document.getElementById('restart-btn');
    this.cardDisplay = document.getElementById('card-display');
    this.gameMessage = document.getElementById('game-message');

    // Event listeners
    this.drawCardBtn.addEventListener('click', () => this.drawCard());
    this.restartBtn.addEventListener('click', () => this.initGame());

    this.initGame();
  }

  // Fisher-Yates Shuffle Algorithm
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  generateDeck() {
    this.deck = [];

    // Generate cards based on quantities
    Object.entries(CARD_QUANTITIES).forEach(([type, quantity]) => {
      for (let i = 0; i < quantity; i++) {
        this.deck.push(new Card(type));
      }
    });

    // Shuffle the deck
    this.shuffle(this.deck);

    console.log('Deck generated and shuffled:', this.deck);
  }

  drawCard() {
    if (this.deck.length === 0) {
      this.gameOver();
      return;
    }

    // Remove and draw the top card
    const card = this.deck.shift();

    // Clear previous card
    this.cardDisplay.innerHTML = '';
    this.cardDisplay.appendChild(card.display());

    console.log('Remaining cards:', this.deck.length);

    // Update game state
    this.updateGameState();
  }

  updateGameState() {
    // Check if deck is empty
    if (this.deck.length === 0) {
      this.gameOver();
    }
  }

  gameOver() {
    this.drawCardBtn.classList.add('hidden');
    this.restartBtn.classList.remove('hidden');
    this.gameMessage.textContent = 'No more cards left in the deck! Click Restart to shuffle again.';
  }

  initGame() {
    this.generateDeck();

    // Reset UI
    this.cardDisplay.innerHTML = '';
    this.gameMessage.textContent = '';
    this.drawCardBtn.classList.remove('hidden');
    this.restartBtn.classList.add('hidden');
  }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
  new ExplodingCardsGame();
});
