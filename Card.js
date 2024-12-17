class Card {
  constructor(type, value = null) {
    this.type = type;
    this.value = type === CARD_TYPES.POINTS
      ? (value || Math.floor(Math.random() * 10) + 1)
      : null;
  }

  display() {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    if (this.type === CARD_TYPES.POINTS) {
      cardElement.textContent = `Points: ${this.value}`;
      cardElement.classList.add('points-card');
    } else {
      cardElement.textContent = this.type;
      cardElement.classList.add(this.type.toLowerCase().replace(' ', '-') + '-card');
    }

    return cardElement;
  }
}
